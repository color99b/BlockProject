# block explorer

## 개요

- 블록, 트랜잭션, 지갑 주소에 대한 모든 정보를 확인할 수 있다.

## stack

- HTML, CSS, JavaScript, React, Node.js, mySQL, MetaMask, Web3, Geth

## 최소 기능 구현

- 블록, 트랜잭션, 지갑 주소 정보 출력
- 토큰의 코인에 대한 가격은 개인판단

- 블록을 db에 저장해서 검색호출하는게 빠르다.

- package.json 백업
  // "start": "react-scripts start",
  // "build": "react-scripts build",
  // "test": "react-scripts test",
  // "eject": "react-scripts eject"

//

## project wsl2 계정목록

["0x8de70fb18b7fd244ac472df5845d327dea1d4134", "0x9f1291e475547e74987fd8be14e4a030d5c588ea", "0xdb750b1b6c4ebf25027c321d5d723251d923fa8b", "0x6f97cdb99483126a61173a188d84dabb8ea169b7", "0x233724c4671efeccfe3155a19cba32fcf4ba89fd", "0x4f6699190e0bcadac4a3c75a4d446e3a8be35fbc", "0x79cd4144b050174642d9778d3be023923e21974e", "0x0c884066473ffa1c65f07549bf581a26e735f765", "0x92161068a50403fb5c7d788fc067406b93a73c07", "0xea42648d8bab73b6ecc0f8068bd6afaea99150cd", "0x7c56cac6a733053b9fdfdefe246311576a37dc24", "0xdba0e1b79b56d52be32dc006acc49e1cf761c9e2"]

## transaction 구문

eth.sendTransaction({from:"" , to:"", value:""})

eth.sendTransaction({from:"0x8de70fb18b7fd244ac472df5845d327dea1d4134" , to:"0x6f97cdb99483126a61173a188d84dabb8ea169b7", value:"2"})
