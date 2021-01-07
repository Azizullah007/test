const router = require("express").Router();
let Developers = require("../models/developer.model");

router.route("/").get((req, res) => {
  Developers.find()
    .then((developers) => res.json(developers))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phonenumber = Number(req.body.phonenumber);
  const address = req.body.address;

  const newDeveloper = new Developers({
    firstname,
    lastname,
    email,
    phonenumber,
    address,
  });

  newDeveloper
    .save()
    .then(() => res.json("Developer added!"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id").get((req, res) => {
  Developers.findById(req.params.id)
    .then((developer) => res.json(developer))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Developers.findByIdAndDelete(req.params.id)
    .then(() => res.json("Developer deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Developers.findById(req.params.id)
    .then((developer) => {
      developer.firstname = req.body.firstname;
      developer.lastname = req.body.lastname;
      developer.email = req.body.email;
      developer.phonenumber = Number(req.body.phonenumber);
      developer.address = req.body.address;

      developer
        .save()
        .then(() => res.json("Developer updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })

    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
