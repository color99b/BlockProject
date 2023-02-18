const router = require("express").Router();
const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8081")
);

web3.eth
  .subscribe("newBlockHeaders", (error, result) => {
    if (!error) {
      console.log("newBlockHeaders : ", result);
    } else {
      return console.log("블록이 없습니다.");
    }
  })
  .on("getBlock", (error, result) => {
    if (!error) {
      const newBlock = web3.eth.getBlock(web3.eth.getBlockNumber);
      console.log(newBlock);
    }
  });

web3.eth.getAccounts().then((data) => console.log(data));
// web3.eth.getBlock().then(console.log);
module.exports = router;
