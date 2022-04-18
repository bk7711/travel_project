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
      res.redirect("/");
      return;
   }
   res.render("login");
});

module.exports = router;
