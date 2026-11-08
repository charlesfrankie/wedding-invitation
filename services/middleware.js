const crypto = require("crypto");

// Constant-time comparison so the password can't be guessed by timing
function safeEqual(a, b) {
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function basicAuth(req, res, next) {
  const { ADMIN_USER, ADMIN_PASS } = process.env;

  // Fail closed: never leave the page open if the env vars are missing
  if (!ADMIN_USER || !ADMIN_PASS) {
    return res.status(503).send("Admin access is not configured");
  }

  const [scheme, encoded] = (req.headers.authorization || "").split(" ");
  if (scheme === "Basic" && encoded) {
    const decoded = Buffer.from(encoded, "base64").toString("utf8");
    const i = decoded.indexOf(":");
    const user = decoded.slice(0, i);
    const pass = decoded.slice(i + 1);

    if (safeEqual(user, ADMIN_USER) && safeEqual(pass, ADMIN_PASS)) {
      return next();
    }
  }

  res.set("WWW-Authenticate", 'Basic realm="Admin", charset="UTF-8"');
  res.status(401).send("Authentication required");
}

module.exports = {
  basicAuth,
};
