const express = require("express");

const Post = require("./postDb.js");
const router = express.Router();

router.get("/", (req, res) => {
  Post.get()
    .then(posts => {
      res.status(200).json({ posts });
    })
    .catch(error => {
      res.status(500).json({ error: "Posts could not be retrieved." });
    });
});

router.get("/:id", validatePostId, (req, res) => {
  const { id } = req.params;
  Post.getById(id)
    .then(post => {
      res.status(200).json({ post });
      console.log(req);
    })
    .catch(error => {
      res.status(500).json({ error: "Post could not be retrieved." });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Post.remove(id)
    .then(response => {
      res.json({ message: "Post removed successfully" });
    })
    .catch(error => {
      res.status(500).json({ message: "Error removing user" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  Post.update(id, { text })
    .then(response => {
      res.status(200).json({ text });
    })
    .catch(error => {
      res.status(400).json({ message: "invalid user id" });
    });
});

// custom middleware

function validatePostId(req, res, next) {
  Post.getById(req.params.id)
    .then(post => {
      if (Object.keys(post).length > 0) {
        next();
      }
    })
    .catch(error => {
      res.status(400).json({ message: "invalid post id" });
    });
}

module.exports = router;
