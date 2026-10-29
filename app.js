require("dotenv").config();

const express = require("express");
const path = require("path");
const {
  getGuestList,
  findGuestByToken,
  deleteGuestByToken,
  addGuestNames,
} = require("./services/requestService");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.set("trust proxy", 1);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const siteOrigin = `${req.protocol}://${req.get("host")}`;
  res.render("index", { guest: null, siteOrigin });
});

app.get("/guest_not_found", (req, res) => {
  res.status(404).render("guest_not_found");
});

app.get("/guest/:token", async (req, res) => {
  try {
    const { token } = req.params;

    if (!token || token.trim().length === 0) {
      return res.redirect("/guest_not_found");
    }

    const guest = await findGuestByToken(token);
    if (!guest) {
      return res.redirect("/guest_not_found");
    }

    const siteOrigin = `${req.protocol}://${req.get("host")}`;
    res.render("index", { guest, siteOrigin });
  } catch (error) {
    console.error("Failed to load guest invitation:", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.get("/guest-link-generator", (req, res) => {
  const data = {};

  res.render("link-generator", data);
});

app.get("/guest-list", async (req, res, next) => {
  try {
    const invitationBase = `${req.protocol}://${req.get("host")}`;
    const guests = await getGuestList(invitationBase);

    res.render("guest-list-index", { guests });
  } catch (error) {
    next(error);
  }
});

app.get("/guest-list/export", async (req, res, next) => {
  try {
    const invitationBase = `${req.protocol}://${req.get("host")}`;
    const guests = await getGuestList(invitationBase);
    if (guests.length === 0) {
      return res.redirect(303, "/guest-list");
    }

    const escapeCsv = (value) => {
      let text = String(value);
      if (/^[\u0000-\u0020]*[=+\-@]/.test(text)) {
        text = `'${text}`;
      }

      return `"${text.replace(/"/g, '""')}"`;
    };
    const rows = [
      ["Guest Name", "Invitation Link"],
      ...guests.map(({ name, link }) => [name, link]),
    ];
    const csv = `\uFEFF${rows.map((row) => row.map(escapeCsv).join(",")).join("\r\n")}`;

    res
      .type("text/csv")
      .attachment("guest-list.csv")
      .send(csv);
  } catch (error) {
    next(error);
  }
});

app.post("/guest/:token/delete", async (req, res) => {
  const { token } = req.params;

  if (!token || token.trim().length === 0) {
    return res.status(400).send("Invalid guest token");
  }

  const deleted = await deleteGuestByToken(token);
  if (!deleted) {
    return res.status(404).send("Guest not found");
  }

  return res.redirect(303, "/guest-list");
});

app.post("/generate-links", async (req, res) => {
  try {
    const submittedNames = req.body?.names;

    try {
      await addGuestNames(submittedNames);

      return res.redirect(303, "/guest-list");
    } catch (error) {
      if (error.message === "Names must be provided as a string.") {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      throw error;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
