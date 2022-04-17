const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/tripdetails", (req, res) => {
  res.render("trip-details");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    // redirecting to the dashboard instead of back home
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
