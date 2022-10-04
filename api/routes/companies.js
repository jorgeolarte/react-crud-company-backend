require("dotenv").config();
const express = require("express");
const Companies = require("../models/Companies");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    Companies.find()
      .exec()
      .then((data) => res.status(200).send(data));
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    Companies.findById(req.params.id)
      .exec()
      .then((data) => {
        console.log(data);
        res.status(200).send(data);
      });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  try {
    Companies.create(req.body).then((result) => res.status(201).send(result));
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    Companies.findOneAndUpdate(req.params.id, req.body).then(() =>
      res.sendStatus(204)
    );
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    Companies.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then(() => res.sendStatus(204));
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
