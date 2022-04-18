const router = require("express").Router();
const { User, Trip } = require("../../models");

// CREATE new user
router.get("/", (req, res) => {
   User.findAll()
      .then((dbUser) => {
         return res.json(dbUser);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get("/:id", (req, res) => {
   User.findOne({
      attributes: { exclude: ["password"] },
      where: {
         id: req.params.id,
      },
      include: [Trip],
   })
      .then((dbUser) => {
         return res.json(dbUser);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

router.post("/", (req, res) => {
   // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
   User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
   })
      .then((dbUserData) => {
         req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
         });
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post("/login", async (req, res) => {
   console.log(req);

   User.findOne({
      where: {
         email: req.body.email,
      },
   })
      .then((dbUserData) => {
         if (!dbUserData) {
            res.status(401).json({
               message: "No user with that email address!",
            });
            return;
         }

         const validPassword = dbUserData.checkPassword(req.body.password);
         console.log(validPassword, dbUserData);
         if (!validPassword) {
            res.status(401).json({ message: "Incorrect password" });
            return;
         }

         req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.status(200).json({
               user: dbUserData,
               messsage: "successfully logged in",
            });
         });
      })
      .catch((err) => {
         res.status(500).json(err);
      });
});

router.post("/login", (req, res) => {
   User.findOne({
      where: {
         email: req.body.email,
      },
   })
      .then((dbUserData) => {
         if (!dbUserData) {
            res.status(400).json({
               message: "No user with that email address!",
            });
            return;
         }
         const validPassword = dbUserData.checkPassword(req.body.password);
      })
      .then(() => {
         if (!validPassword) {
            res.status(400).json({ message: "Incorrect password!" });
            return;
         }

         req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: "You are now logged in!" });
         });
      })
      .catch((err) => res.status(500).json(err));
});

// Logout
router.post("/logout", (req, res) => {
   if (req.session.loggedIn) {
      req.session.destroy(() => {
         res.status(204).end();
      });
   } else {
      res.status(404).end();
   }
});

module.exports = router;
