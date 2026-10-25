require("dotenv").config();

const express = require("express");
const path = require("path");
const {
  getGuestList,
  findGuestByToken,
  addGuestNames,
} = require("./services/requestService");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { guest: null });
});

app.get("/guest/:token", async (req, res) => {
  try {
    const { token } = req.params;

    if (!token || token.trim().length === 0) {
      return res.status(400).send("Invalid invitation token");
    }

    const guest = await findGuestByToken(token);
    if (!guest) {
      return res.status(404).send("Invitation not found");
    }

    res.render("index", { guest });
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
    const guests = await getGuestList();

    res.render("guest-list-index", { guests });
  } catch (error) {
    next(error);
  }
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
