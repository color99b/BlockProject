import styled from "styled-components";

const ItemSearchComponent = () => {
  return (
    <Main>
      <Vbox>
        <Fbox>The Ethereum Blockchain Explorer</Fbox>
        <Fbox>
          <div>All Filters</div>
          <div>
            <input
              type="text"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
            />
          </div>
        </Fbox>
        <div>
          Sponsored: Hot games, huge winnings, welcome bonus up to $1000.
          Register now!
        </div>
      </Vbox>
      <Vbox>
        <div>광고입니다</div>
      </Vbox>
    </Main>
  );
};
const Main = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Fbox = styled.div`
  display: flex;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ItemSearchComponent;
