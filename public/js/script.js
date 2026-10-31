/* ================= EDIT THIS BLOCK ================= */
const CONFIG = {
  names: {
    km: ["ហុកសុង", "ស៊ីវម៉ី"],
    en: ["Hoksong", "Sievmey"],
  }, // [groom, bride]
  fullNames: {
    km: ["ទឹម​ ហុកសុង", "លី ស៊ីវម៉ី"],
    en: ["Tim Hoksong", "Ly Sivmey"],
  }, // [groom, bride],
  groomParents: {
    km: ["លោក ទឹម សុខហេង", "លោកស្រី សេង​ សុខហួ"],
    en: ["Mr. Tim Sokheng", "Mrs. Seng Sokhuor"],
  },
  brideParents: {
    km: ["លោក លី ប៊ុនធី", "លោកស្រី ជួង គីមបួយ"],
    en: ["Mr. ...", "Mrs. ..."],
  },
  dateISO: "2026-12-18T17:00:00", // first event of the day (used by the countdown)
  timeText: { km: "វេលាម៉ោង ៥:០០ នាទីល្ងាច", en: "at 5:00 PM" },
  venue: { km: "មជ្ឈមណ្ឌលម៉ូឌែន២ អគារ B", en: "Modern Center 2, Hall B" },
  address: {
    km: "ផ្លូវ ... រាជធានីភ្នំពេញ",
    en: "Street ..., Phnom Penh",
  },
  mapQuery: "Modern Center 2, Phnom Penh",

  /* PHOTOS and MUSIC: file paths ("photos/1.jpg") or URLs. "" = placeholder / none */
  photos: {
    background: "", // full-screen photo behind everything (gets the golden sepia tint automatically)
    gallery: [
      "CX7_6688",

      "CX7_6727",
      "CX7_6750",

      "CX7_6754",
      "CX7_6678_COVER",
      "CX7_6802_02",

      "CX7_6457",

      "CX7_6417",
      "CX7_6354",
      "CX7_6465",

      "DSC_8098",

      "DSC_8003",
      "DSC_8043",

      "DSC_7918",
      "DSC_7964",
      "DSC_7932",

      "CX7_6330",
    ],
    khqr: [
      "/images/tim-hoksong-ly-sievmey-khqr.jpg",
      "/images/tim-hoksong-ly-sievmey-khqr-2.jpg",
    ], // one path or a list; 2 per row
  },
  music: "", // e.g. "music/song.mp3". Leave "" to hide the speaker button

  /* [time km, time en, text km, text en, icon]   icons: flower, fist, sun, ring, stand, glasses (+ people, plate, heart, rings, camera, gift, lotus, scissors, candle) */
  schedule: [
    [
      "ម៉ោង ០៦:៣០ ព្រឹក",
      "6:30 AM",
      "ជួបជុំញាតិមិត្ត និងភ្ញៀវកិត្តិយសរៀបចំពិធីហែជំនូន",
      "Relatives and honored guests gather to prepare the gift procession",
      "people",
    ],
    [
      "ម៉ោង ០៧:០០ ព្រឹក",
      "7:00 AM",
      "ពិធីហែជំនូនកំណត់ចូលរោងជ័យ",
      "Gift procession enters the wedding tent",
      "gift",
    ],
    [
      "ម៉ោង ០៧:៣០ ព្រឹក",
      "7:30 AM",
      "ពិធីចៅមហានិយាយជើងការ សែនព្រេន រៀបរាប់ផ្លែឈើ និងអញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលព្រឹក",
      "Opening by the master of ceremonies, spirit offering and fruit arrangement; breakfast for honored guests",
      "plate",
    ],
    [
      "ម៉ោង ០៨:០០ ព្រឹក",
      "8:00 AM",
      "ពិធីបំពាក់ចិញ្ចៀន",
      "Ring exchange ceremony",
      "rings",
    ],
    [
      "ម៉ោង ០៩:០០ ព្រឹក",
      "9:00 AM",
      "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត",
      "Monk chanting blessing",
      "lotus",
    ],
    [
      "ម៉ោង ១០:០០ ព្រឹក",
      "10:00 AM",
      "ពិធីកាត់សក់បង្កក់សិរីកូនប្រុស-កូនស្រី",
      "Hair-cutting ceremony for the groom and bride",
      "scissors",
    ],
    [
      "ម៉ោង ១១:០០ ថ្ងៃត្រង់",
      "11:00 AM",
      "ពិធីសំពះផ្ទឹមចងដៃ បង្វិលពពិល និងព្រះថោងតោងស្បៃ",
      "Sompeah Pteam: hand-tying, candle circling and the Preah Thong veil ritual",
      "candle",
    ],
    [
      "ម៉ោង ១២:០០ ថ្ងៃត្រង់",
      "12:00 PM",
      "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់ បញ្ចប់កិច្ចអាពាហ៍ពិពាហ៍",
      "Lunch for honored guests; conclusion of the wedding ceremony",
      "plate",
    ],
    [
      "ម៉ោង ០៥:០០ ល្ងាច",
      "5:00 PM",
      "អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ នៅមជ្ឈមណ្ឌលម៉ូឌែន២ អគារ B ដោយមេត្រីភាព។ សូមអរគុណ!",
      "Wedding dinner for honored guests at Modern 2 Center, Building B. Thank you!",
      "glasses",
    ],
  ],
};
const UI = {
  title: ["សិរីមង្គលអាពាហ៍ពិពាហ៍", "The Wedding"],
  coverInv: ["សូមគោរពអញ្ជើញ", "You are cordially invited"],
  scroll: ["រំកិលចុះ", "Scroll"],
  drLabels: [
    ["ថ្ងៃ", "ទី", "ខែ", "ឆ្នាំ"],
    ["Day", "Date", "Month", "Year"],
  ],
  khqrSmall: ["ចំណងដៃ", "Gift"],
  khqrTitle: ["ចំណងដៃ", "Wedding Gift"],
  khqrText: [
    "សូមអរគុណចំពោះទឹកចិត្ត និងពរជ័យដ៏មានតម្លៃរបស់លោកអ្នក។",
    "Thank you for your kindness and your valued blessings.",
  ],
  khqrSave: ["រក្សាទុក QR", "Save QR"],
  hint: ["ប៉ះត្រា ដើម្បីបើកសំបុត្រ", "Tap the seal to open"],
  guestLabel: ["សូមគោរពអញ្ជើញ", "Cordially invited"],
  honor: ["យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ", "We have the honor to invite"],
  invite: [
    "ឯកឧត្តម លោកជំទាវ លោកអ្នកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្តទាំងអស់ សូមអញ្ជើញចូលរួមជាអធិបតី និង ជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រីរបស់យើងខ្ញុំ",
    "our distinguished guests, family and friends to join us as guests of honor and bless the wedding of our son and daughter",
  ],
  groom: ["កូនប្រុសនាម", "Groom"],
  bride: ["កូនស្រីនាម", "Bride"],
  whenPre: ["ពិសារភោជនាហារដែលនឹងប្រព្រឹត្តទៅនៅ", "Taking place on"],
  whenText: [
    "ពិសារភោជនាហារដែលនឹងប្រព្រឹត្តទៅនៅថ្ងៃ សុក្រ ទី ១៨ ខែ ធ្នូ ឆ្នាំ ២០២៦ ត្រូវនឹងថ្ងៃ ៩កើត ខែ មិគសិរ ឆ្នាំ មមី អដ្ឋស័ក ព.ស ២៥៧០ វេលាម៉ោង ៥:00 ល្ងាច ស្ថិតនៅ មជ្ឈមណ្ឌលម៉ូឌែន២ អគារ B ភូមិ ព្រែកតាឡុង សង្កាត់ ចាក់អង្រែក្រោម ខណ្ឌ មានជ័យ រាជធានី ភ្នំពេញ ដោយមេត្រីភាព ។​ សូមអរគុណ!",
  ],
  at: ["ស្ថិតនៅ", "at"],
  whenEnd: ["ដោយមេត្រីភាព។ សូមអរគុណ!", "With love. Thank you!"],
  cal: ["របៀបវារៈកម្មវិធី", "Program"],
  loc: ["ទីតាំងកម្មវិធី", "Location"],
  loc2: ["ពិធីមង្គលការ និង ពិសាភោជនាហារ", "Ceremony & Dinner"],
  viewLoc: ["មើលទីតាំង", "View location"],
  photos: ["កម្រងរូបភាព", "Gallery"],
  until: ["រក្សាទុកកាលបរិច្ឆេទ", "Save The Date"],
  countdown: ["រាប់ថយក្រោយ", "Countdown"],
  units: [
    ["ថ្ងៃ", "ម៉ោង", "នាទី", "វិនាទី"],
    ["days", "hours", "minutes", "seconds"],
  ],
  today: ["ថ្ងៃនេះគឺជាថ្ងៃមង្គល!", "Today is the day!"],
  sorry: ["លិខិតសូមអភ័យទោស", "A note of apology"],
  sorryText: [
    "យើងខ្ញុំជាមាតាបិតា កូនប្រុស កូនស្រី សូមអភ័យទោសដោយពុំបានជូនសំបុត្រអញ្ជើញដោយផ្ទាល់ ។  សូមឯកឧត្តម លោកជំទាវ លោកអ្នកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្តទាំងអស់ សូមអញ្ជើញចូលរួមជាអធិបតី និង ជាភ្ញៀវកិត្តិយសក្នុង​ កម្មវិធី របស់យើងខ្ញុំដោយមេត្រីភាព។",
    "We, the parents, sincerely apologize if we could not invite you in person, or if your name was misspelled or left off the invitation. Your presence is a great honor to our family.",
  ],
  thanks: ["លិខិតថ្លែងអំណរគុណ", "A note of thanks"],
  thanksText: [
    "យើងខ្ញុំជាមាតាបិតា កូនប្រុស កូនស្រី សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយសក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ។ សូមជូនពរដល់ ឯកឧត្តម លោកជំទាវ លោកអ្នកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្តទាំងអស់ សូមប្រកបតែភាពសុខដុមចម្រុងចម្រើន និងសុភមង្គលក្នុងក្រុមគ្រូសារជានិច្ចនិរន្តរ៏។ សូមអរគុណ!",
    "We, the parents, deeply thank you for joining our children's wedding as guests of honor. May you and your family enjoy peace, good health and success in all you do. Thank you!",
  ],
};
/* =================================================== */

const $ = (id) => document.getElementById(id);

/* shrink the guest name until it fits inside its plate */
function fitGuest() {
  const el = $("guestName"),
    box = $("guestWrap");
  if (!el || !box) return;
  el.style.fontSize = "";
  let s = parseFloat(getComputedStyle(el).fontSize);
  while (el.offsetWidth > box.clientWidth && s > 8)
    el.style.fontSize = --s + "px";
}
addEventListener("resize", fitGuest);
if (document.fonts) document.fonts.ready.then(fitGuest);

/* Guest name from the link, e.g.  https://yoursite.com/?to=សុខា   (also accepts ?guest= or ?name=) */
// const GUEST = (() => {
//   const match = location.pathname.match(/^\/guest\/([^/]+)\/?$/);
//   return match ? decodeURIComponent(match[1]) : "";
// })();

const GUEST = window.GUEST || "";

const date = new Date(CONFIG.dateISO);
let L = 0; // 0 = Khmer, 1 = English
const kn = (n) => String(n).replace(/\d/g, (d) => "០១២៣៤៥៦៧៨៩"[d]); // Note: keep standard digit map if needed
const num = (n) => (L ? String(n) : kn(n));
const pick = (o) => (L ? o.en : o.km);
const KM_DAYS = [
  "អាទិត្យ",
  "ច័ន្ទ",
  "អង្គារ",
  "ពុធ",
  "ព្រហស្បតិ៍",
  "សុក្រ",
  "សៅរ៍",
];
const KM_MONTHS = [
  "មករា",
  "កុម្ភៈ",
  "មីនា",
  "មេសា",
  "ឧសភា",
  "មិថុនា",
  "កក្កដា",
  "សីហា",
  "កញ្ញា",
  "តុលា",
  "វិច្ឆិកា",
  "ធ្នូ",
];
const dateStr = () =>
  L
    ? date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : `ថ្ងៃ${KM_DAYS[date.getDay()]} ទី${kn(date.getDate())} ខែ${KM_MONTHS[date.getMonth()]} ឆ្នាំ${kn(date.getFullYear())}`;

const ph = (i) =>
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${["#B07A34", "#8F5E26", "#A06C2E"][i % 3]}'/><stop offset='1' stop-color='#4A2C12'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><path d='M400 300L480 400 400 500 320 400Z' fill='none' stroke='#F0C75E' stroke-opacity='.7' stroke-width='4'/></svg>`,
  );
const setImg = (el, url, fb) => {
  el.src = url || fb;
  el.onerror = () => {
    el.onerror = null;
    el.src = fb;
  };
};

const ICONS = {
  flower:
    '<path d="M12 3c2.3 2.5 2.3 5.5 0 7.7-2.3-2.2-2.3-5.2 0-7.7Z"/><path d="M12 13.3c2.3 2.2 2.3 5.2 0 7.7-2.3-2.5-2.3-5.5 0-7.7Z"/><path d="M3 12c2.5-2.3 5.5-2.3 7.7 0-2.2 2.3-5.2 2.3-7.7 0Z"/><path d="M13.3 12c2.2-2.3 5.2-2.3 7.7 0-2.5 2.3-5.5 2.3-7.7 0Z"/><circle cx="12" cy="12" r=".8"/>',
  fist: '<path d="M8 11.5V7a1.25 1.25 0 0 1 2.5 0v3M10.5 9.5V5.8a1.25 1.25 0 0 1 2.5 0V9.5M13 9.4V6.6a1.25 1.25 0 0 1 2.5 0V10M15.5 9.8a1.25 1.25 0 0 1 2.5 0V14c0 3.2-2.1 5.7-5.4 5.7-2.7 0-4.2-1.5-5.4-3.5L5 13.8c-.6-1 .9-2.1 1.8-1.2L8 13.8"/>',
  sun: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18"/>',
  ring: '<circle cx="12" cy="14.5" r="5"/><path d="M10.2 8.6 12 5.5l1.8 3.1"/>',
  stand:
    '<rect x="7.5" y="13" width="9" height="7"/><path d="M6 20h12M12 13v-3.5M12 4.8c1 1.2 1.1 2.2 0 3.2-1-1-1-2 0-3.2Z"/>',
  people:
    '<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="8.5" r="2.5"/><path d="M2.5 20c0-4 2.5-6 5.5-6s5.5 2 5.5 6M13.5 20c0-3 1.5-4.8 3.8-4.8S21.5 17 21.5 20"/>',
  plate:
    '<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="3"/><path d="M2.5 4v7M2.5 11v9M21.5 4v16"/>',
  heart:
    '<path d="M12 20s-7.5-4.6-7.5-10.3A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/>',
  rings:
    '<circle cx="9" cy="14.5" r="5"/><circle cx="15.5" cy="14.5" r="5"/><path d="M8 4.5 10 3l2 1.5-2 2.2Z"/>',
  camera:
    '<rect x="3" y="7" width="18" height="13" rx="2.5"/><circle cx="12" cy="13.5" r="3.6"/><path d="M8 7l1.6-3h4.8L16 7"/>',
  glasses:
    '<path d="M5 4h6l-.8 5a2.2 2.2 0 0 1-4.4 0L5 4ZM8 11.2V19M5.5 19h5M13 4h6l-.8 5a2.2 2.2 0 0 1-4.4 0L13 4ZM16 11.2V19M13.5 19h5"/>',
  gift: '<rect x="3.5" y="9" width="17" height="11" rx="1.5"/><path d="M3.5 13h17M12 9v11M12 9C10 5 6 5.5 7 9M12 9c2-4 6-3.5 5 0"/>',
  lotus:
    '<path d="M12 20c-3.5 0-6.5-2.5-7-6 2.5.2 4.6 1.4 7 4 2.4-2.6 4.5-3.8 7-4-.5 3.5-3.5 6-7 6Z"/><path d="M12 18C9.5 15.5 9 11 12 5c3 6 2.5 10.5 0 13Z"/>',
  scissors:
    '<circle cx="6" cy="6.5" r="2.7"/><circle cx="6" cy="17.5" r="2.7"/><path d="M8.2 8 21 18M8.2 16 21 6"/>',
  candle:
    '<path d="M12 2.5c1.7 2 2.1 3.4 0 5.2-2.1-1.8-1.7-3.2 0-5.2Z"/><rect x="9" y="9.5" width="6" height="11" rx="1"/>',
};

/* Static setup */

if (CONFIG.photos.background) {
  $("bg").classList.add("photo");
  $("bg").style.backgroundImage = `url("${CONFIG.photos.background}")`;
}

const q = encodeURIComponent(CONFIG.mapQuery);
$("mapFrame").src =
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.4259582016983!2d104.93886466959479!3d11.501275313469423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095754d74794b1%3A0x380d3ab7dc3b2f54!2sModern%20Center%202!5e0!3m2!1sen!2skh!4v1791173389995!5m2!1sen!2skh`;
$("dir").href = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

/* KHQR */
const qrPh =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400'><rect width='100%' height='100%' fill='#f4f4f2'/><g fill='none' stroke='#8f847c' stroke-width='6'><rect x='60' y='90' width='60' height='60'/><rect x='180' y='90' width='60' height='60'/><rect x='60' y='210' width='60' height='60'/></g><g fill='#8f847c'><rect x='76' y='106' width='28' height='28'/><rect x='196' y='106' width='28' height='28'/><rect x='76' y='226' width='28' height='28'/><rect x='150' y='170' width='24' height='24'/><rect x='190' y='210' width='24' height='24'/><rect x='216' y='246' width='24' height='24'/><rect x='150' y='250' width='24' height='24'/></g><text x='150' y='345' font-family='Georgia,serif' font-size='20' text-anchor='middle' fill='#8f847c'>add khqr.png</text></svg>`,
  );
// one or more QR cards, shown 2 per row (CONFIG.photos.khqr can be a single path or a list)
const qrList = [].concat(CONFIG.photos.khqr || [""]);
$("khqrGrid").innerHTML = qrList
  .map(
    () =>
      `<figure class="kq-card"><img alt="KHQR" /><figcaption>KHQR</figcaption><a class="kq-save" data-ui="khqrSave"></a></figure>`,
  )
  .join("");
$("khqrGrid")
  .querySelectorAll(".kq-card")
  .forEach((card, i) => {
    const img = card.querySelector("img"),
      a = card.querySelector(".kq-save");
    setImg(img, qrList[i], qrPh);
    a.href = qrList[i] || qrPh;
    a.setAttribute("download", `khqr-${i + 1}.png`);
    img.onclick = () => {
      $("lb").querySelector("img").src = img.src; // tap a QR to enlarge it
      $("lb").showModal();
    };
  });

/* Gallery */
const WIDTHS = [800, 1280, 1920, 2560];
const srcFor = (name, w) => `gallery/${w}/${name}.jpg`;
const srcsetFor = (name) =>
  WIDTHS.map((w) => `${srcFor(name, w)} ${w}w`).join(", ");

// Same idea as your setImg, but with responsive sizes
const setResponsiveImg = (el, name, fb) => {
  if (!name) {
    el.src = fb;
    return;
  }
  el.onerror = () => {
    el.onerror = null;
    el.removeAttribute("srcset"); // otherwise the browser may keep retrying srcset
    el.src = fb;
  };
  // el.sizes = "(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw";
  el.srcset = srcsetFor(name);
  el.src = srcFor(name, 1280);
};

const gal = $("gallery");
const lb = $("lb");
const lbImg = lb.querySelector("img");

gal.innerHTML = CONFIG.photos.gallery
  .map(
    (name) => `
    <button type="button" data-name="${name}">
      <img alt="" loading="lazy" decoding="async">
    </button>`,
  )
  .join("");

gal.querySelectorAll("img").forEach((img, i) => {
  setResponsiveImg(img, CONFIG.photos.gallery[i], ph(i));
});

gal.querySelectorAll("button").forEach((b) => {
  b.onclick = () => {
    const name = b.dataset.name;
    const img = b.querySelector("img");
    lbImg.removeAttribute("srcset");
    lbImg.onerror = () => {
      lbImg.onerror = null;
      lbImg.src = img.currentSrc || img.src; // fall back to the grid image
    };
    lbImg.sizes = "100vw";
    lbImg.src = srcFor(name, 1280);
    lbImg.srcset = srcsetFor(name);
    lb.showModal();
  };
});

lb.addEventListener("click", () => lb.close());

// const gal = $("gallery");
// gal.innerHTML = CONFIG.photos.gallery
//   .map(() => `<button type="button"><img alt="" loading="lazy"></button>`)
//   .join("");
// gal
//   .querySelectorAll("img")
//   .forEach((img, i) => setImg(img, CONFIG.photos.gallery[i], ph(i)));
// gal.querySelectorAll("button").forEach(
//   (b) =>
//     (b.onclick = () => {
//       $("lb").querySelector("img").src = b.firstChild.src;
//       $("lb").showModal();
//     }),
// );
// $("lb").addEventListener("click", () => $("lb").close());

/* Music (optional) - starts when the envelope is opened */
let audio = null;
const musicBtn = $("music");
if (CONFIG.music) {
  audio = new Audio(CONFIG.music);
  audio.loop = true;
  musicBtn.hidden = false;
  musicBtn.onclick = () => {
    const on = musicBtn.getAttribute("aria-pressed") !== "true";
    musicBtn.setAttribute("aria-pressed", on);
    on ? audio.play().catch(() => {}) : audio.pause();
  };
}
const startMusic = () => {
  if (audio)
    audio
      .play()
      .then(() => musicBtn.setAttribute("aria-pressed", "true"))
      .catch(() => {});
};

function tick() {
  const ms = date - Date.now();
  if (ms <= 0) {
    $("cd").innerHTML = `<p style="grid-column:1/-1">${UI.today[L]}</p>`;
    return;
  }
  const v = [
    Math.floor(ms / 864e5),
    Math.floor(ms / 36e5) % 24,
    Math.floor(ms / 6e4) % 60,
    Math.floor(ms / 1e3) % 60,
  ];
  $("cd").innerHTML = v
    .map(
      (x, i) =>
        `<div><b>${num(String(x).padStart(2, "0"))}</b><span>${UI.units[L][i]}</span></div>`,
    )
    .join("");
}
setInterval(tick, 1000);

function render() {
  document.documentElement.lang = L ? "en" : "km";
  $("langBtn").textContent = L ? "ខ្មែរ" : "EN";
  document
    .querySelectorAll("[data-ui]")
    .forEach((e) => (e.textContent = UI[e.dataset.ui][L]));

  // the guest plate only shows when the link has a name (?to=Name)
  $("eguest").hidden = !GUEST;
  if (GUEST) {
    $("guestName").textContent = GUEST;
    fitGuest();
  }

  const fn = CONFIG.fullNames[L ? "en" : "km"];

  $("g2").textContent = fn[0];
  $("b2").textContent = fn[1];

  $("h1").innerHTML = pick(CONFIG.groomParents).join("<br>");
  $("h2").innerHTML = pick(CONFIG.brideParents).join("<br>");

  // Date and time
  const pad = (n) => String(n).padStart(2, "0");
  const h = date.getHours(),
    m12 = h % 12 || 12,
    mm = date.getMinutes();
  const per = h < 12 ? "ព្រឹក" : h < 17 ? "រសៀល" : "ល្ងាច";
  $("bdMonth").textContent = L
    ? date.toLocaleDateString("en-US", { month: "long" })
    : "ខែ" + KM_MONTHS[date.getMonth()];
  $("bdDay").textContent = L
    ? date.toLocaleDateString("en-US", { weekday: "long" })
    : "ថ្ងៃ" + KM_DAYS[date.getDay()];
  $("bdNum").textContent = num(pad(date.getDate()));
  $("bdTime").textContent = CONFIG.bigTime
    ? pick(CONFIG.bigTime)
    : L
      ? date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })
      : `${kn(m12)}:${kn(pad(mm))} នាទី${per}`;
  $("bdYear").textContent = num(date.getFullYear());

  $("when").textContent = `${UI.whenText}`;
  // `${UI.whenPre[L]} ${dateStr()} ${pick(CONFIG.timeText)} ${UI.at[L]} ${pick(CONFIG.venue)} ${UI.whenEnd[L]}`;
  $("schedDate").textContent = dateStr();

  $("cdDate").textContent = dateStr();
  $("venue").textContent = `${pick(CONFIG.venue)}`;
  $("schedule").innerHTML = CONFIG.schedule
    .map(
      (s) =>
        `<li><span class="node"><svg viewBox="0 0 24 24">${ICONS[s[4]] || ICONS.heart}</svg></span><time>${s[L].replace(/^ម៉ោង\s*/, "")}</time><p>${s[2 + L]}</p></li>`,
    )
    .join("");

  // cover: date row, English names, time, venue
  const dl = UI.drLabels[L];
  const dv = [
    L
      ? date.toLocaleDateString("en-US", { weekday: "long" })
      : KM_DAYS[date.getDay()],
    num(pad(date.getDate())),
    L
      ? date.toLocaleDateString("en-US", { month: "long" })
      : KM_MONTHS[date.getMonth()],
    num(date.getFullYear()),
  ];
  $("dr").innerHTML = dl
    .map((x, i) => `<div><small>${x}</small><b>${dv[i]}</b></div>`)
    .join("");
  $("cvEn").innerHTML =
    `${CONFIG.names.en[0]} <i>&amp;</i> ${CONFIG.names.en[1]}`;
  $("cvTime").textContent = pick(CONFIG.timeText);
  $("cvVenue").textContent = pick(CONFIG.venue);
  tick();
}
$("langBtn").onclick = () => {
  L = L ? 0 : 1;
  render();
};

/* Highlight the dock button for the page on screen */
const links = [...document.querySelectorAll(".dock a")];
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        links.forEach((a) =>
          a.classList.toggle("on", a.hash === "#" + e.target.id),
        );
    }),
  { rootMargin: "-45% 0px -45% 0px" },
);
["top", "cal", "loc", "photos", "count", "letters"].forEach((id) =>
  io.observe($(id)),
);

render();

/* ================= NAME LOGO (foil Khmer names, flourish, heart, butterfly) ================= */
const qs = (x) => document.querySelector(x);
const qsa = (x) => [...document.querySelectorAll(x)];
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
const hasGsap = typeof gsap !== "undefined";

const logoHTML = (d) =>
  // `<div class="nlogo ${d ? "dark" : ""}"><span class="nm n1"><b class="foil kh">${CONFIG.names.km[0]}</b></span><svg class="fl" viewBox="0 0 200 60"><path class="fp" pathLength="1" d="M14 4C60 6 70 54 100 32S150 6 192 46"/><path class="ht" d="M100 40C90 33 93 26 100 30C107 26 110 33 100 40Z"/><g transform="translate(170 12)"><g class="bf"><ellipse cx="-5" cy="-3" rx="6" ry="3.5" transform="rotate(-30 -5 -3)"/><ellipse cx="5" cy="-3" rx="6" ry="3.5" transform="rotate(30 5 -3)"/><ellipse cx="-4" cy="4" rx="4" ry="2.6" transform="rotate(25 -4 4)"/><ellipse cx="4" cy="4" rx="4" ry="2.6" transform="rotate(-25 4 4)"/></g></g></svg><span class="nm n2"><b class="foil kh">${CONFIG.names.km[1]}</b></span></div>`;
  `<div class="nlogo ${d ? "dark" : ""}"><img src="/images/logo-name-trns.png" /></div>`;

qsa("[data-logo]").forEach(
  (e) => (e.innerHTML = logoHTML(e.dataset.logo === "d")),
);

const envelopeLogoHTML = (d) =>
  `<div class="nlogo ${d ? "dark" : ""}"><img src="/images/logo-name.png" /></div>`;
qsa("[data-logo-envelope]").forEach(
  (e) => (e.innerHTML = envelopeLogoHTML(e.dataset.logo === "d")),
);

function animLogo(r, d = 0, pulse = 0) {
  const img = r && r.querySelector("img");
  if (!img || reduce || !hasGsap) return;
  // soft diagonal "write-on" mask: top-left name -> flourish -> bottom-right name
  const setMask = (p) => {
    const m = `linear-gradient(115deg, #000 ${p - 28}%, transparent ${p}%)`;
    img.style.webkitMaskImage = img.style.maskImage = m;
  };
  const st = { p: 0 };
  setMask(0); // hidden right away (no flash before the delay)
  gsap.killTweensOf(img);
  gsap.fromTo(
    img,
    { opacity: 0, y: 12, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out", delay: d },
  );
  gsap.to(st, {
    p: 128,
    duration: 1.9,
    ease: "power2.inOut",
    delay: d,
    onUpdate: () => setMask(st.p),
    onComplete: () => (img.style.webkitMaskImage = img.style.maskImage = ""),
  });
  // gold glow pulse once it has been written (pulse: 0 = none, n = n times, -1 = forever)
  if (pulse)
    gsap.fromTo(
      img,
      { filter: "brightness(1) drop-shadow(0 0 0px rgba(255,226,160,0))" },
      {
        filter: "brightness(1.35) drop-shadow(0 0 7px rgba(255,226,160,.6))",
        duration: 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: pulse < 0 ? -1 : pulse * 2 - 1,
        delay: d + 2.2,
        immediateRender: false,
      },
    );
}

/* ================= scalloped envelope flap ================= */
(function () {
  const n = 7,
    k = 3.2,
    R = [],
    Lf = [];
  for (let i = 0; i <= n * 4; i++) {
    const t = i / (n * 4),
      b = Math.abs(Math.sin(Math.PI * t * n)) * k;
    R.push([100 - 50 * t - b * 0.894 * -0 + -b * 0.894, 100 * t - b * 0.447]);
  }
  for (let i = n * 4; i >= 0; i--) {
    const p = R[i];
    Lf.push([100 - p[0], p[1]]);
  }
  const poly = [[0, 0], [100, 0], ...R.slice(0, -1), [50, 100], ...Lf.slice(1)];
  const cp =
    "polygon(" +
    poly.map((p) => p[0].toFixed(2) + "% " + p[1].toFixed(2) + "%").join(",") +
    ")";
  ["ff", "fk", "fs"].forEach(
    (id) => (document.getElementById(id).style.clipPath = cp),
  );
  const ln = [...R, ...Lf.slice(1)].map((p) => [
    50 + (p[0] - 50) * 0.93,
    p[1] * 0.93,
  ]);
  document
    .getElementById("gl")
    .setAttribute("points", ln.map((p) => p.join(",")).join(" "));
})();

/* ================= LIVE BACKGROUND: twinkling sparkles + small butterflies ================= */
function makeFX(parent, after) {
  const c = document.createElement("canvas");
  c.className = "fx";
  parent.querySelector(after).after(c);
  const x = c.getContext("2d"),
    weak =
      (navigator.hardwareConcurrency || 8) <= 4 ||
      (navigator.deviceMemory || 8) <= 2;
  const NS = weak ? 16 : 36,
    NB = weak ? 2 : 3;
  let W = 0,
    H = 0,
    dpr = 1,
    on = false,
    last = 0;
  const S = [],
    B = [];
  const rnd = (a, b) => a + Math.random() * (b - a);
  function size() {
    const r = parent.getBoundingClientRect();
    if (!r.width) return;
    dpr = Math.min(devicePixelRatio || 1, 2);
    const w = Math.round(r.width),
      h = Math.round(r.height);
    if (w === W && h === H) return;
    W = w;
    H = h;
    c.width = w * dpr;
    c.height = h * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  new ResizeObserver(size).observe(parent);
  size();
  for (let i = 0; i < NS; i++)
    S.push({
      x: Math.random(),
      y: Math.random(),
      r: rnd(0.8, 2.4),
      p: rnd(0, 6.3),
      s: rnd(0.5, 1.6),
      v: rnd(0.002, 0.01),
      big: Math.random() < 0.3,
    });
  for (let i = 0; i < NB; i++)
    B.push({
      x: Math.random(),
      y: rnd(0.15, 0.85),
      a: rnd(0, 6.3),
      sp: rnd(16, 28),
      sz: rnd(6, 9),
      p: rnd(0, 6.3),
      w: rnd(0.3, 0.7),
    });
  function star(px, py, r, a) {
    x.fillStyle = `rgba(255,238,205,${a})`;
    x.beginPath();
    x.moveTo(px, py - r * 3);
    x.quadraticCurveTo(px, py, px + r * 3, py);
    x.quadraticCurveTo(px, py, px, py + r * 3);
    x.quadraticCurveTo(px, py, px - r * 3, py);
    x.quadraticCurveTo(px, py, px, py - r * 3);
    x.fill();
  }
  function fly(b, t) {
    const f = Math.abs(Math.sin(t * 9 + b.p)),
      sz = b.sz;
    x.save();
    x.translate(b.x * W, b.y * H);
    x.rotate(b.a + Math.PI / 2);
    x.globalAlpha = 0.9;
    for (const d of [-1, 1]) {
      x.save();
      x.scale(d * (0.25 + 0.75 * f), 1);
      x.fillStyle = "rgba(233,201,151,.85)";
      x.strokeStyle = "rgba(255,243,223,.9)";
      x.lineWidth = 0.7;
      x.beginPath();
      x.ellipse(sz * 0.55, -sz * 0.35, sz * 0.6, sz * 0.95, 0.5, 0, 6.3);
      x.fill();
      x.stroke();
      x.beginPath();
      x.ellipse(sz * 0.4, sz * 0.5, sz * 0.4, sz * 0.6, -0.4, 0, 6.3);
      x.fill();
      x.stroke();
      x.restore();
    }
    x.strokeStyle = "rgba(255,243,223,.95)";
    x.lineWidth = 1.2;
    x.beginPath();
    x.moveTo(0, -sz * 0.8);
    x.lineTo(0, sz * 0.9);
    x.stroke();
    x.restore();
  }
  function frame(ts) {
    if (!on) return;
    requestAnimationFrame(frame);
    if (document.hidden || !W) return;
    const dt = Math.min((ts - last) / 1000 || 0.016, 0.05);
    last = ts;
    const t = ts / 1000;
    x.clearRect(0, 0, W, H);
    for (const s of S) {
      s.y -= s.v * dt;
      if (s.y < -0.02) {
        s.y = 1.02;
        s.x = Math.random();
      }
      const a = Math.pow(Math.max(0, Math.sin(t * s.s + s.p)), 2) * 0.9;
      if (a < 0.03) continue;
      const px = s.x * W + Math.sin(t * 0.4 + s.p) * 6,
        py = s.y * H;
      if (s.big) star(px, py, s.r, a);
      else {
        x.fillStyle = `rgba(250,226,180,${a * 0.45})`;
        x.beginPath();
        x.arc(px, py, s.r * 2.2, 0, 6.3);
        x.fill();
        x.fillStyle = `rgba(255,244,222,${a})`;
        x.beginPath();
        x.arc(px, py, s.r * 0.8, 0, 6.3);
        x.fill();
      }
    }
    for (const b of B) {
      b.a += Math.sin(t * b.w + b.p) * 1.3 * dt;
      b.x += (Math.cos(b.a) * b.sp * dt) / W;
      b.y += (Math.sin(b.a) * b.sp * dt) / H;
      if (b.x < -0.05) b.x = 1.05;
      if (b.x > 1.05) b.x = -0.05;
      if (b.y < 0.08)
        b.a = Math.abs(b.a % 6.28) > 3.14 ? b.a + 0.05 : b.a - 0.05;
      if (b.y < 0.05) b.y = 0.05;
      if (b.y > 0.95) b.y = 0.95;
      fly(b, t);
    }
  }
  function draw1() {
    x.clearRect(0, 0, W, H);
    for (const s of S) {
      x.fillStyle = "rgba(255,244,222,.6)";
      x.beginPath();
      x.arc(s.x * W, s.y * H, s.r * 0.8, 0, 6.3);
      x.fill();
    }
  }
  return {
    start() {
      if (on) return;
      size();
      if (reduce) {
        draw1();
        return;
      }
      on = true;
      last = performance.now();
      requestAnimationFrame(frame);
    },
    stop() {
      on = false;
    },
  };
}
const fxEnv = makeFX(qs("#env"), ".ebg"); // behind the envelope
const fxPage = makeFX(qs(".stage"), ".tint"); // behind the whole invitation
const fxCover = makeFX(qs("#cover"), ".cv-bg"); // over the cover photo
fxEnv.start();

/* ================= OPEN THE ENVELOPE ================= */
const tiltEl = qs("#tilt");
let opened = false;
const idle = hasGsap
  ? gsap.to("#stage", {
      y: -6,
      rotate: 0.35,
      duration: 3.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    })
  : null;

addEventListener("pointermove", (e) => {
  if (opened || !hasGsap) return;
  const x = e.clientX / innerWidth - 0.5,
    y = e.clientY / innerHeight - 0.5;
  gsap.to("#stage", {
    rotateY: x * 7,
    rotateX: -y * 5,
    duration: 0.8,
    ease: "power2.out",
    overwrite: "auto",
  });
});
tiltEl.addEventListener("click", openEnvelope);
tiltEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openEnvelope();
  }
});

let revealed = false;
function revealInvitation() {
  revealed = true;
  qs("#env").style.display = "none";
  fxEnv.stop();
  document.body.classList.remove("locked");
  scrollTo(0, 0);
  qs("#bar").hidden = false;
  fxPage.start();
  fxCover.start();
  startMusic();
  coverIntro();
}

/* cover: slow photo zoom, items rise in, logo draws itself, foil shimmer */
function coverIntro() {
  if (reduce || !hasGsap) return;
  gsap.fromTo(
    "#cover .ph",
    { scale: 1.14 },
    { scale: 1, duration: 6, ease: "power2.out" },
  );
  gsap.from(qsa("#cover .ci:not(#clogo)"), {
    y: 22,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.5,
  });
  animLogo(qs("#clogo"), 0.7, -1); // cover logo: write-on, then glow forever
  animLogo(qs("#bar .lw"), 1.2, 0); // top-left logo: write-on only
}

/* run the cover canvas only while the cover is on screen */
new IntersectionObserver((es) =>
  es.forEach((e) =>
    e.isIntersecting && revealed ? fxCover.start() : fxCover.stop(),
  ),
).observe(qs("#cover"));

/* the name logo further down draws itself when it scrolls into view */
{
  const hl = qs("#heroLogo");
  if (hasGsap && !reduce) hl.querySelector("img").style.opacity = 0; // revealed by animLogo

  new IntersectionObserver(
    (es, o) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          animLogo(hl, 0, 1);
          o.unobserve(hl);
        }
      }),
    { rootMargin: "0px 0px -15% 0px" },
  ).observe(hl);
}

function openEnvelope() {
  if (opened) return;
  opened = true;
  if (!hasGsap) {
    revealInvitation();
    return;
  } // safety net if GSAP didn't load
  if (idle) idle.kill();
  const parts = [".eback", ".pocket", "#fs", "#flap", ".eguest"],
    flap = qs("#flap"),
    seal = qs("#seal"),
    card = qs("#card");
  let swapped = false;
  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
  tl.to("#stage", { rotateX: 0, rotateY: 0, rotate: 0, y: 0, duration: 0.4 })
    .to(".ehint", { opacity: 0, duration: 0.4 }, 0)
    .to(seal, { scale: 0.9, duration: 0.45 }) // pressed
    .to(seal, {
      scale: 1.2,
      y: -16,
      filter: "drop-shadow(0 22px 14px rgba(0,0,0,.55))",
      duration: 0.8,
    }) // lifted
    .to(seal, {
      x: () => innerWidth * 0.8,
      y: -80,
      rotate: 28,
      duration: 0.9,
      ease: "power2.in",
    }) // set aside
    .to("#fs", { opacity: 0, duration: 0.9 }, "<")
    .to(
      flap,
      {
        rotateX: -180,
        duration: 1.3,
        onUpdate() {
          const a = gsap.getProperty(flap, "rotateX");
          if (!swapped && a < -90) {
            swapped = true;
            flap.style.zIndex = 1;
          }
        },
      },
      "-=.3",
    )
    .to(
      card,
      {
        y: () => -card.offsetHeight * 0.62,
        rotate: -2.5,
        duration: 1.1,
        ease: "power2.out",
      },
      "-=.2",
    )
    .to(parts, { y: "+=34", duration: 1.1 }, "<")
    .to(
      parts,
      { y: () => innerHeight, duration: 0.9, ease: "power2.in" },
      "+=.05",
    )
    .to(
      card,
      {
        x: () =>
          -(
            card.getBoundingClientRect().left +
            card.offsetWidth / 2 -
            innerWidth / 2
          ),
        y: () =>
          gsap.getProperty(card, "y") +
          (innerHeight / 2 -
            card.getBoundingClientRect().top -
            card.offsetHeight / 2),
        scale: () => Math.min(1.5, (innerWidth * 0.92) / card.offsetWidth),
        rotate: 0,
        duration: 1.1,
        ease: "power3.inOut",
      },
      "-=.5",
    )
    .to("#fade", { opacity: 1, duration: 0.55, ease: "none" })
    .add(revealInvitation)
    .to("#fade", { opacity: 0, duration: 0.9, ease: "none" });
  if (reduce) tl.timeScale(3);
}

/* top-left logo switches to the dark-gold version while it floats over the cream KHQR page */
{
  const bar = qs("#bar"),
    kq = qs("#khqr");
  let raf = 0;
  const check = () => {
    raf = 0;
    bar.classList.toggle("cream", kq.getBoundingClientRect().top < 56);
  };
  addEventListener(
    "scroll",
    () => raf || (raf = requestAnimationFrame(check)),
    { passive: true },
  );
}
