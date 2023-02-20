const router = require("express").Router();
const web3 = require("./web3");

router.use("/web3", web3);

module.exports = router;
