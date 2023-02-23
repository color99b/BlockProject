# 전체 총평

1. 이번 프로젝트엔 redux를 쓰지 않아서 probs가 어지럽게 이동하는데 redux 공부로 다음 프로젝트부턴 probs관리를 잘해야할 필요가 있다.

2. DB 관계형 테이블 생성을 정확히 알고 쓰는 게 아니라 그냥 문법을 외워서 쓰는 것 같다.

## 만들어낸 기능 설명

1. Header, Footer

- Header 와 Footer Component를 미리 만들어 모든 페이지에서 출력했다.

2. MainPage : react기준 처음 기준이 되는 root("/")

- 2-1. Search
  - Filter의 종류(wallet Address, transaction Hash, Block Number:height)로 나누어 검색하여 해당 정보가 있으면 해당 정보의 페이지로, 없으면 404errorPage (밑에 따로 서술) 를 띄운다.
  - Filter를 선택하지 않았을 경우 filter를 선택하라는 알림창을 띄운다.
- 2-2. Latest Block & Latest Transactions

  - sequelize를 통해 db에서 가장 최근에 생성된 n개를 가져와 화면에 정해진 양식대로 출력한다.
  - View all Blocks 또는 View all Transactions를 클릭하면 모든 블록, 모든 트랜잭션을 표기하는 page로 이동한다.

- 2-3. View all {Block | Transaction | Wallet} Page

  - db에서 모든 정보를 가져오는데 pagination을 통해 좀 더 효율적으로 정보를 표시한다.
  - Block Txn Miner 등을 클릭시 해당 infoPage로 이동한다.

- 2-4. Not Found Page
  - filter로 검색할 data의 형태를 결정하고, useNavigate를 통해 이동, useLocation으로 query를 가져와 axios에서 통신을 한다. 해당 table에 data가 없을 경우 이 화면을 출력하고, 검색했던 filter와, 검색했던 value를 return 해준다.
