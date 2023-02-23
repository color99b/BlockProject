const router = require("express").Router();
const express = require("express");
const Web3 = require("web3");
const { Block } = require("../models");
const web3 = new Web3("ws://localhost:8081");

module.exports = router;
