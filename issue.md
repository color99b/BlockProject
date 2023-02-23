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

5. geth 서버와 연결 되었을 때 mine이 되어 블록이 생성되면 자동으로 db에 들어가야하는데, 이 때 자동으로 들어가지 않고 react front에서 새로고침을 해야 create를 호출해 만드는 건 오류가 있다.

- 해결 : block 이 mine 되자마자 web3.js 서버쪽에서 바로 create를 통해 db에 바로바로 넣어준다. 이때 db에는 저장이 되지만, react는 렌더링이 되지 않았기에 새로고침을 해야 data가 나타난다.
  - block 이 생성되는 걸 바로 알기위해 geth와 연결을 하는 method : subscribe

```sh
web3.eth.subscribe("newBlockHeaders", (error, result) => {

  if (!error) {
    console.log("newBlockHeaders : ", result);
  } else {
    return console.log("블록이 없습니다.");
  }
});
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

5. location query 한글 깨짐

- 검색 결과를 찾을 수 없을 때 검색할 때 입력한 값을 query를 통해 location 했는데, 검색한 내용에 대해 front에서 띄울 때 useLocation으로 query를 받아오니까 %AFAS#@% 이런식으로 깨지는 현상이 발생했다.
  - 해결 : decodeURI({변수명}) 를 통해 자동으로 변환된 code를 다시 한글로 풀어낼 수 있었다.

# DataBase(Mysql2)

1. react의 useEffect를 통해 페이지를 새로 불러올때마다 ( 새로고침 할 때마다 ) mining 된 block 및 transaction 을 가져오는 코드를 구성했다.

- db에 data가 없을 때 : 모든 정보를 입력한다.
- db에 data가 있을 때 : db의 마지막 블록 number(height)와 채굴된 마지막 block의 number(height)를 비교하여 같으면 바로 return, 다르면 새로 추가된 block 추가
- 위처럼 구조를 작성했지만 useEffect(()=>{},[]) 시 2번씩 실행되어 처음 서버를 열면 data가 2개씩 들어가는 현상 발생

- 해결 : react에는 src/index.js 에서 strictmode 태그로 기본적으로 감싸져 생성되는데 React.StrictMode 는 오류를 잘 잡아내기 위해 두 번씩 lendering을 한다고 한다.
  StrictMode 태그를 지움으로써 해결.

2. block 의 전체 list를 출력할 때 몇 백개가 될 수도 그 이상이 될 수도 있는 data를 한 화면에 아래로만 쫙 보여줄 수 없어서 pagination 이 필요했다.

- 해결 : sequelize 의 offset과 limit를 통해 한 페이지에 보여줄 개수를 정할 수 있다.

```sh
let pageNum = req.query.page; // 요청 페이지 넘버
let offset = 0;

if(pageNum > 1){
offset = 7 * (pageNum - 1);
}

[모델명].post.findAll({
// pagination
offset: offset,
limit: 7
})
```

3. db의 블록이든, transaction 이든 쌓이다보면 몇 백개가 넘을 수 있는 data를 한 화면에 밑으로 scroll로만 보여주기엔 문제가 있다. 따라서 pagination 작업을 해야만 한다.

- 해결 : sequelize 에서 제공하는 limit, offset method를 활용한다.

```sh
const temp = await {모델명}.findAll({
      where: {
       {column명} : {원하는 값}
      },
      order: [[{column 명}, "desc"]],  // desc는 내림차순
      offset: {매개변수},
      limit: {매개변수},
    });
```

여기서 offset은 몇 번째 index부터 보여줄 것인지, limit는 한 번에 몇 개까지 가져올 것인지를 말한다.
따라서 나머지는 js로 컨트롤 해준다.

```
axios 통신을 보낼때 offset과 limit를 수정할수 있도록 매개변수로 받아와주고, front에서는 1page면 offset 이 처음엔 1, 2page면 offset += page당 limit 가 되겠다.
```

4. Transaction을 출력할 때 어떤 계정에서 어떤 계정으로 보냈는지 즉 from 과 to가 저장이 되게 되는데, 한 계정을 조회 하면 transaction database에서 조회한 계정이 from으로 저장된data와 to로 저장된 data 모두를 불러와야했고, 불러온 모두를 발생 순서에 따라 정렬해서 출력해야했다.

- 해결: db에서 findAll 로 따로 따로 가져와서 배열에 spread 로 합쳐보았으나 정렬에 문제가 많았다. sequlize 문 중에 or와 같은 연산자를 하는 역할의 method가 있었다.

```sh
const OP = require ("sequelize");

const find = async(req,res)=>{
  const data = await {table명}.findAll({
    where : [Op.op]: [
      {
      {column명} : {찾고자 하는 값}
      },
      {
        위와 같은 식
      }
    ]
  })
}
```

# React

1. styled-component에서의 가상클래스 활용

- 해결: & 자기선택자 활용
  .css 파일에서는 클래스이름이 예를 들어 temp 라면 아래와 같은데

  ```css
  .temp{
    ~~~
  }
  .temp:after{

  }

  .temp:before{

  }
  ```

  styled-component에서는 간단하게 이렇게 표현할 수있다.

  ```jsx
  const tempDiv = styled.div`
    ~~~
    &:after{
      ~~~
    }
    &:before{
      ~~~
    }
  `;
  ```

2. react의 장점인 코드를 재사용하면서 css만 살짝씩 변화주고 싶었는데 .css 파일을 만드는 방법 외에 다른 방법이 필요했다.

- 해결 : 아래와 같이 속성명: 후 ${()=> return } 콜백함수의 return값을 통하여 원하는 값으로 변경할 수 있다.
  ()의 매개변수는 probs만을 가져올 수 있으므로 redux를 사용하거나 probs에 수치를 미리 전달받아 처음 렌더링할때 생성되는 구조이다.
  단 여기서의 probs는 당연하게도 전체 container가 아닌 ~~~.div 로 생성된 ~~~에게 직접 전달된 probs를 의미한다.
  // 나는 container의 probs인줄알고 냅다 그냥 쓰다가 곤욕을 겪었다.

  ```css
  ~~~.div`
    padding: ${(probs) => {
        console.log("probs", probs);
        return probs + "rem";
      }}
      0.5rem;
      `
  ```

3. block과 transaction들을 쭉 나열했는데, 해당 블록이나 transaction을 클릭했을때 하나하나의 상세 정보를 띄워야했다. 하지만 그 하나하나의 정보를 어떻게 가져오고, 만들어둔 page에 주소가 다르게끔 출력을 할지 막혔다.

- 해결 :

  1. 해당 block이나 transaction를 <a></a>로 감싸고, 이동할때 href 를 block or transaction + "고유값" 으로 설정한다.

  ```jsx
  <Move href={"info/?block=" + element.number.toString()}>
    {element.number}
  </Move>
  ```

  2. 이동한 infoPage 에서 useLocation을 통해 (block인지 transaction인지) 와 (고유값) 을 가져온다.

  ```jsx
  const location = useLocation();
  const typeArr = location.search.split("=");
  const type = typeArr[0].slice(1);
  const typeNum = typeArr[1];
  ```

  이때 useLocation으로 초기화한 location은 아래와 같이 나오기에 위에서 "="기준으로 잘라주고 tpye은 "?" 있을지 없을지 모른다는 ?를 하나 자르고 할당해줬다.

  ```sh
    {pathname: '/info/', search: '?block=20', hash: '', state: null, key: 'default'}
  ```

4. axios를 통해 db에서 데이터를 가져오고, 가져온 값을 토대로 component값을 뽑는데, 블록과 transaction 배열을 가져와 map 돌리는건 정상적으로 되는 반면 (배열을 가져온 후 rendering이 됨), 하나의 정보만 가져와서 component에 바로 입력하려고 하면 rendering이 먼저되고 나서 정보를 가져온다.  
   -> 해결 : 원리는 모르지만 해결방법 가져온 데이터가 있으면 componet를 아니면 빈태그를 추가하는 구문으로 대체한다.

   ```jsx
   //원래 오류난 코드
   <~~~Component probs={probs}>
   //고친 코드
   {data? <~~~Component probs={probs}> : <></>}
   ```

- 우선 정상적으로 되는 경우

  arr를 뽑아오는 container

  ```js
  useEffect(() => {
    // setBlock(await axios.post("web3/getBlock"));
    async function getBlock() {
      const data = await request.post("/web3/getBlock");
      setBlockArr(data.data.arr);
      setTransactionArr(data.data.transaction);
    }
    getBlock();
  }, []);
  return (
    <BlockBoxComponent blockArr={blockArr} transactionArr={transactionArr} />
  );
  ```

  probs로 받은 arr를 뽑아내는 component

  ```jsx
  <VblockBox>
    <ViewBlockTitle>Latest Blocks</ViewBlockTitle>
    {blockArr.map((element, index) => {
      return (
        <ViewBlockBox key={index}>
          <FboxLeft>
            <img src={blockICON} alt="" srcset="" />
            <Vbox>
              <div>
                <Blue>
                  <Move href={"info/?block=" + element.number.toString()}>
                    {element.number}
                  </Move>
                </Blue>{" "}
              </div>
              <div>{new Date(element.createdAt).toLocaleString()}</div>
            </Vbox>
          </FboxLeft>
          <Fbox>
            <Vbox>
              <div>
                Fee Recipient <Blue>Flashbots: Builder</Blue>
              </div>
              <div>
                <Blue>146 txns</Blue> in 12 secs
              </div>
            </Vbox>
            <ButtonBox>
              <ButtnDiv>{element.difficulty} dif</ButtnDiv>
            </ButtonBox>
          </Fbox>
        </ViewBlockBox>
      );
    })}
    <ViewAll>VIEW ALL BLOCKS →</ViewAll>
  </VblockBox>
  ```

- rendering이 먼저 되어 버리는 경우

  - container

  ```jsx
  async function getInfo(type, value) {
    const { data } = await request.post("/web3/getInfo", {
      value: value,
      type: type,
    });

    setInfo(data.info);
  }
  useEffect(() => {
    getInfo(type, typeNum).then();
  }, []);
  return <ViewInfoComponent info={info} type={type} />;
  ```

  - component

  ```jsx
  console.log(info);
  return (
    <>
      <Board>
        {type == "block" ? (
          <>
            <div>
              <div>
                🐒<div> Miner:</div> <div>{info.miner}</div>
              </div>
              <div>
              ---
  ```

  무슨 차이인지 모르겠다 아직까지는

### redux 연습 필수다.
