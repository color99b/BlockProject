# wsl2

1. 서버열기  
   1-1. server index 작성 및 cros로 react 연동  
   1-2. api routes로 web3 연결  
   1-3. ubuntu에서 geth를 node-vs 버전에 따라 실행문을 다르게 실행한다.

   ```sh
   #18.12
   geth --datadir ~/myGeth  --ws.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 --ws --ws.port 8081 --ws.addr "0.0.0.0" --ws.origins "*" console
   ```

   ```sh
   #16.18
   geth --datadir ~/myGeth --ws.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 --ws --ws.port 8081 --ws.origins "*" console
   ```

2. 계정 잠금 해제하기  
   2-1. 서버를 열어둔 wsl 과 다른 창 하나를 더 켠다.  
   2-2. 계정관리를 위해 geth attach로 열어둔 서버 port에 접속한다.

   ```sh
   #단방향
   geth attach http://localhost:{portNumber}
   ```

   ```sh
   #Web3 (웹소켓)
   geth attach ws://localhost:{portNumber}
   ```

   2-3. 아래 문구를 입력하여 원하는 계정의 unlock을 진행한다.

   ```sh
   #eth.accounts() 의 0번째
   personal.unlockAccount(eth.accounts[0])
   ```

3. 채굴하기  
   3-1. 채굴 보상을 받을 계정을 먼저 선택한다.

   ```sh
   #eth.accounts() 의 0번째
   miner.setEtherbase(eth.accounts[0])
   ```

   3-2. 채굴을 시작한다.

   ```sh
   miner.start()
   ```

   3-3. 채굴을 종료한다.

   ```sh
   miner.stop()
   ```

4. 송금하기 (Transaction 생성)

- 계정 unlock 이 필수로 선행되어야 한다.

  4-1. 어떤계정에서 어떤계정으로 얼마나 보낼지를 작성한다.

  ```sh
  eth.sendTransaction({from:"" , to:"", value:""})
  ```

# CSS

1.

- background-image 에 바로 opacity를 주면 그 해당 하위 요소들까지 전부 투명도가 바뀌게 된다.
  html/css 에서는 :before 를 통해 가상클래스로 새로운 div를 덧대어 투명도를 조절했는데 react에서는 styled-component를 통해 어떻게 해결할지 난감했다.
  - 해결 :
  ```js
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3) 10%,
      rgba(255, 255, 255, 0.7) 70%,
      rgba(255, 255, 255, 0.5)
    ),
    url(${pattern});
  ```

````

왼쪽부터 시작해서 width 10%까지는 rgba 1번째로, 70%까지는 rgba 2번째로, 마지막은 rgba 3번째로 색을 점진적으로 채워나가는 것인데, 하위 컴포넌트와 상관없이 독립적으로 투명도 조절이 가능하다.

2.

- <hr/> 태그의 색상을 변경하고 싶은데 hr은 자체 태그만으로 기본 색상이 지정되어서 어려움을 겪었다.
    - 해결 :

  ```javascript
  hr {
    background:pink;
    height:1px;
    border:0;
  }
  ```

  background 속성으로 색을, height 로 두께를 정해주고, border:0 로 원래 속성 기본 값을 지워준다.

3. DarkMode

- 다크 모드를 하려고하니 만들어놓은 틀에서 배경색을 바꾸는데 id를 하나하나 찾아야 되는 지경에 이르렀다. 제일 최상위 page에서 모드 선택시 probs로 하위 container들에게 전달하여 전달한 내용(light, dark) 에 따라 색상을 설정하도록 해야겠다. -> probs에 probs 타고 보기 복잡해질 게 분명하니 redux를 사용하도록 하자.

4. 날짜출력

- DB에 created_at column에는 자동으로 시간이 들어가는데 2023-02-20 06:04:36 db에서는 이렇지만 front에서 출력하면 2023-02-20T06:04:36.000Z 라고 나오는 것을 볼 수 있다. 원하는 날짜 포맷으로 변경하는데 어려움을 겪었다.
  - 해결 : 새로운 Date 객체의 인자로 전달하고, 새로 만들어진 객체를 toLocaleString 및 toString나 custom으로 포맷을 변경한다.
  ```js
  {
    new Date(element.createdAt).toLocaleString();
  }
  ```
````

# DataBase(Mysql2)

- react의 useEffect를 통해 페이지를 새로 불러올때마다 ( 새로고침 할 때마다 ) mining 된 block 및 transaction 을 가져오는 코드를 구성했다.
  - db에 data가 없을 때 : 모든 정보를 입력한다.
  - db에 data가 있을 때 : db의 마지막 블록 number(height)와 채굴된 마지막 block의 number(height)를 비교하여 같으면 바로 return, 다르면 새로 추가된 block 추가
- 위처럼 구조를 작성했지만 useEffect(()=>{},[]) 시 2번씩 실행되어 처음 서버를 열면 data가 2개씩 들어가는 현상 발생

- 해결 : react에는 src/index.js 에서 strictmode 태그로 기본적으로 감싸져 생성되는데 React.StrictMode 는 오류를 잘 잡아내기 위해 두 번씩 lendering을 한다고 한다.
  StrictMode 태그를 지움으로써 해결.
