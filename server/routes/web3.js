const router = require("express").Router();
const Web3 = require("web3");
const { Block, Transaction } = require("../models");

const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8081")
);

router.post("/getBlock", async (req, res) => {
  // const blockArr = await Block.findAll({ order: ["number"] });
  const blockArr = await Block.findAll({
    limit: 5,
    order: [["number", "desc"]],
  });
  // const filter = web3.eth.filter("latest");
  web3.eth.subscribe("newBlockHeaders", (error, result) => {
    if (!error) {
      // console.log("newBlockHeaders : ", result);
    } else {
      return console.log("블록이 없습니다.");
    }
  });

  console.log(blockArr);
  try {
    res.send({ isError: false, arr: blockArr });
  } catch (error) {
    res.send({ isError: true });
  }
});

web3.eth.getBlockNumber(function (err, rtn) {
  let latest_block_number = rtn;
  for (let i = 0; i <= latest_block_number; i++) {
    web3.eth.getBlock(i, false, async function (err, block) {
      if (block.transactions[0]) {
        block.transactions = block.transactions[0];
        // await Transaction.create({ transaction: block.transactions });
      } else {
        block.transactions = "";
      }
      await Block.create(block);
      web3.eth.getBlockTransactionCount(i, true, function (err, cnt) {
        if (cnt > 0) {
          for (let j = 0; j < cnt; j++) {
            web3.eth.getTransactionFromBlock(i, j, async function (err, tx) {
              await Transaction.create(tx);
              console.log(tx);
            });
          }
        }
      });
    });
    // await Block.create(block);
    // console.log(block);
    // web3.eth.getBlock(i, false, async function (err, block) {
    //   if (block.transactions[0]) {
    //     block.transactions = block.transactions[0];
    //     console.log(block.transactions);
    //     await Transaction.create({ transaction: block.transactions });
    //   } else {
    //     block.transactions = "";
    //   }
    //   await Block.create(block);
    //   // console.log(block);
    // });
    // web3.eth.getBlock(i, true, async function (err, block) {
    //   block.transaction.forEach(function (tx) {
    //     console.log(tx);
    //   });
    // console.log(block);
  }
});

web3.eth.getAccounts().then((data) => console.log(data));
// web3.eth.getBlock().then(console.log);
module.exports = router;
