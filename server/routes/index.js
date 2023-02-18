const router = require("express").Router();
const board = require("./board");
const web3 = require("./web3");
router.use("/board", board);
router.use("/web3", web3);
module.exports = router;
