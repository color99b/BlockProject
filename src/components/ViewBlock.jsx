import styled from "styled-components";

const ViewBlockComponent = ({ blockArr, transactionArr }) => {
  console.log(blockArr);
  console.log(transactionArr);
  return (
    <Main>
      <div>
        <BlockSpan>
          <WeightFont>Blocks</WeightFont>
        </BlockSpan>
      </div>
      <hr />
      <div>
        <GraySpan>
          <WeightFont> Featured: </WeightFont>
        </GraySpan>
        <GraySpan>
          Bridging tokens between Ethereum, Layer 2 and other chains? Browse
          through the Blockscan
        </GraySpan>{" "}
        <Blue>
          <WeightFont> bridges list. </WeightFont>
        </Blue>
      </div>
      <Status>
        <div>
          <div>
            <GraySpan>NETWORK UTLIZATION (24H)</GraySpan>
          </div>
          <div>
            <StatusSpan>49.8%</StatusSpan>
          </div>
        </div>
        <div>
          <div>
            <GraySpan>LAST SAFE BLOCK</GraySpan>
          </div>

          <div>
            <StatusSpan>16674241</StatusSpan>
          </div>
        </div>
        <div>
          <div>
            <GraySpan>AVERAGE GAS PRICE(24H)</GraySpan>
          </div>
          <div>
            <StatusSpan>37.172738281Gwei</StatusSpan>
          </div>
        </div>
        <div>
          <div>
            <GraySpan>BURNT FEES </GraySpan>🔥
          </div>

          <div>
            <StatusSpan>2,927,153.89 ETH</StatusSpan>
          </div>
        </div>
      </Status>
      <Board>
        <BoardHead>
          <HeadLeft>
            <div>Total of 16,674,285 blocks</div>
            <div>(Showing blocks between #16674260 to #16674284)</div>
          </HeadLeft>
          <HeadRight>
            <button>paging</button>
          </HeadRight>
        </BoardHead>
        <Table>
          <thead>
            <Th>Block</Th>
            <Th>Age</Th>
            <Th>Txn</Th>
            <Th>Miner Account</Th>
            <Th>Gas Used</Th>
            <Th>Gas Limit</Th>
            <Th>Difficulty</Th>
            <Th>Reward</Th>
            <Th>Burnt Fees (ETH)</Th>
          </thead>
          <tbody>
            {blockArr.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.number}</td>
                    <td>8 secs ago</td>
                    <td>{item.size}</td>
                    <td>{item.miner}</td>
                    <td>
                      {item.gasUsed}
                      {}
                    </td>
                    <td>{item.gasLimit}</td>
                    <td>{item.difficulty}</td>
                    <td>{Math.random().toFixed(3)} ETH</td>
                    <td>
                      {Math.random().toFixed(3)}(
                      {(Math.random() * 9).toFixed(3)}%)
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
        <div></div>
      </Board>
      <FootAlert>
        💡 Blocks are batches of transactions linked together via cryptographic
        hashes. Any tampering of a block invalidates subsequent blocks as their
        hashes would be changed. Learn more about this page in our Knowledge
        Base.
      </FootAlert>
    </Main>
  );
};
const Main = styled.div`
  padding: 2rem 7.5rem 6.5rem 5.5rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px 0.1px rgba(0, 0, 0, 0.1);
`;

const Fbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1.5rem;
  > div {
    padding: 1rem;
    width: 100%;
    border-radius: 15px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  > div > div:first-child {
    margin-bottom: 0.3rem;
  }
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  border-radius: 15px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 0.8rem;
  box-shadow: 1px 6px 15px rgba(0, 0, 0, 0.1);
`;
const BoardHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadLeft = styled.div``;

const HeadRight = styled.div`
  display: flex;
  align-items: center;
`;
const Table = styled.table`
  text-aling: left;
  padding: 1rem 0 1rem 0.3rem;
  > thead {
    gap: 10rem;
  }
`;

const Th = styled.th`
  text-align: left;
`;

const BlockSpan = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
const GraySpan = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  letter-spacing: -0.05rem;
`;
const StatusSpan = styled.span`
  font-size: 1.15rem;
`;
const WeightFont = styled.span`
  font-weight: bold;
`;

const Blue = styled.span`
  color: rgba(7, 132, 195);
  font-size: 0.9rem;
`;

const FootAlert = styled.div`
  color: rgba(0, 0, 0, 0.55);
  font-size: 0.8rem;
  padding-top: 0.5rem;
`;
export default ViewBlockComponent;
