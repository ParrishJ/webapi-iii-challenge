const express = require("express");

const User = require("./userDb.js");
const router = express.Router();

router.post("/", (req, res) => {});

router.post("/:id/posts", (req, res) => {});

router.get("/", (req, res) => {
  User.get()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(error => {
      res.status(500).json({ error: "Users could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.getById(id)
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(error => {
      res.status(500).json({ error: "User could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
