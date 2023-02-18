const Web3 = require("web3");

describe("web3 테스트 코드", () => {
  let web3;
  let accounts;

  let sender;
  let received;

  it("web3 연결 테스트", () => {
    // new Web3.providers.HttpProvider("http://127.0.0.1:8545");
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  });

  it("Latest Block 높이(number) 가져오기", async () => {
    const latestBlock = await web3.eth.getBlockNumber();
    console.log(latestBlock);
  });

  it("전체 accounts 가져오기", async () => {
    // 현재 가나쉬에 있는 accounts
    accounts = await web3.eth.getAccounts();
    sender = accounts[0];
    received = accounts[1];
    console.log(accounts);
  });
});
