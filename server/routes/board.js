const router = require("express").Router();
const express = require("express");
const Web3 = require("web3");
const { Board } = require("../models");
const web3 = new Web3("ws://localhost:8081");

router.post("/new", async (req, res) => {
  console.log(req.body);
  try {
    await Board.create(req.body);
    res.send({ isError: false });
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/block", async (req, res) => {
  console.log(req.body);
  try {
    web3.eth.subscribe("newBlockHeaders", (error, result) => {
      if (!error) {
        console.log(result);
      }
    });
    res.send({ isError: false });
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
