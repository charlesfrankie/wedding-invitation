const crypto = require("crypto");
const prisma = require("../lib/prisma");

function buildGuestEntries(guestRecords, invitationBase) {
  const baseUrl = invitationBase || process.env.INVITATION_URL;

  return guestRecords.map(({ token, name }) => {
    const invitationUrl = new URL(baseUrl);

    invitationUrl.pathname = `/guest/${encodeURIComponent(token)}`;

    const link = invitationUrl.toString();
    const message = `សូមគោរពអញ្ជើញ ${name} ចូលរួមពិធីមង្គលការរបស់យើងខ្ញុំ។ សូមចុចលើតំណខាងក្រោមដើម្បីបើកសំបុត្រអញ្ជើញ៖\n\n${link}`;

    return {
      token,
      name,
      link,
      message,
      telegramUrl: `https://t.me/share/url?url=${encodeURIComponent(message)}`,
    };
  });
}

async function getGuestList(invitationBase) {
  const guests = await prisma.guest.findMany({
    orderBy: { createdAt: "desc" },
    select: { token: true, name: true, createdAt: true },
  });

  return buildGuestEntries(guests, invitationBase);
}

async function findGuestByToken(token) {
  return prisma.guest.findUnique({
    where: { token },
    select: { token: true, name: true, createdAt: true },
  });
}

async function deleteGuestByToken(token) {
  const result = await prisma.guest.deleteMany({ where: { token } });
  return result.count > 0;
}

async function addGuestNames(submittedNames) {
  if (typeof submittedNames !== "string") {
    throw new Error("Names must be provided as a string.");
  }

  const names = [
    ...new Set(
      submittedNames
        .split("\n")
        .map((name) => name.trim())
        .filter(Boolean),
    ),
  ];

  if (names.length === 0) {
    return [];
  }

  const existingGuests = await prisma.guest.findMany({
    where: { name: { in: names } },
    select: { name: true },
  });
  const existingNames = new Set(existingGuests.map((guest) => guest.name));
  const newNames = names.filter((name) => !existingNames.has(name));

  for (const name of newNames) {
    // A short random token preserves the old JSON key format.
    let token;
    let exists;
    do {
      token = crypto.randomBytes(4).toString("hex");
      exists = await prisma.guest.findUnique({
        where: { token },
        select: { id: true },
      });
    } while (exists);

    await prisma.guest.create({ data: { token, name } });
  }

  return prisma.guest.findMany({ orderBy: { createdAt: "asc" } });
}

const SITE_URL = (
  process.env.INVITATION_URL || "https://hoksong-sievmey.vercel.app"
).replace(/\/$/, "");

const OG_DEFAULTS = {
  title: "Hoksong & Sievmey · Wedding Invitation",
  description: "We warmly invite you to celebrate our wedding.",
  url: `${SITE_URL}/`,
};

function buildOg(guest) {
  if (!guest) return OG_DEFAULTS;

  return {
    ...OG_DEFAULTS,
    title: `${guest.name}, you're invited · Hoksong & Sievmey Wedding`,
    description: `Dear ${guest.name}, we warmly invite you to celebrate our wedding.`,
    url: `${SITE_URL}/guest/${encodeURIComponent(guest.token)}`,
  };
}

module.exports = {
  buildGuestEntries,
  getGuestList,
  findGuestByToken,
  deleteGuestByToken,
  addGuestNames,
  buildOg,
};
