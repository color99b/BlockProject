import styled from "styled-components";
import etherSmall from "../imgs/ethereum-original.svg";
import gas from "../imgs/gas.svg";
const ViewInfoComponent = ({ info, type }) => {
  console.log(info);

  return (
    <>
      <Board>
        {type == "block" ? (
          <>
            <div>
              <div>
                ⛏️<div> Miner:</div> <div>{info.miner}</div>
              </div>
              <div>
                🕑<div> Timestamp:</div> <div>{info.createdAt}</div>
              </div>
              <div>
                📁<div> Transactions:</div>{" "}
                <div>
                  {info.transactions
                    ? info.transactions
                    : "transaction 이 존재하지 않습니다."}
                </div>
              </div>
            </div>

            <div>
              <div>
                🔺<div> Nonce:</div> <div>{info.nonce}</div>
              </div>
              <div>
                💧<div> Difficulty:</div> <div>{info.difficulty}</div>
              </div>
              <div>
                🔥<div> Total Difficulty:</div>{" "}
                <div>{info.totalDifficulty}</div>
              </div>
              <div>
                ⏹️<div> Size:</div> <div>{info.size}</div>
              </div>
            </div>

            <div>
              <div>
                💨<div> Gas Used:</div> <div>{info.gasUsed}</div>
              </div>
              <div>
                💨<div> Gas Limit:</div> <div>{info.gasLimit}</div>
              </div>
              <div>
                🐒<div> Extra Data:</div> <div>{info.extraData}</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div>
                📂<div> Transaction Hash:</div> <div>{info.hash}</div>
              </div>
              <div>
                🧱<div> BlockNum:</div> <div>{info.blockNumber}</div>
              </div>
              <div>
                🔑<div> BlockHash:</div> <div>{info.blockHash}</div>
              </div>
              <div>
                🕐<div> Timestamp:</div> <div>{info.createdAt}</div>
              </div>
            </div>
            <div>
              <div>
                🎭<div> Sponsored:</div>{" "}
                <div>
                  히히 광고받아서 <Blue>냉면 사묵어야지~</Blue>
                </div>
              </div>
            </div>

            <div>
              <div>
                ➡️<div> From:</div> <div>{info.from}</div>
              </div>
              <div>
                ⬅️<div> To:</div> <div>{info.to}</div>
              </div>
            </div>

            <div>
              <div>
                💰<div> Value:</div> <div>{info.value}</div>
              </div>
              <div>
                💨<div> Gas:</div> <div>{info.gas}</div>
              </div>
              <div>
                💨<div> Gas Price:</div> <div>{info.gasPrice}</div>
              </div>
            </div>
          </>
        )}
      </Board>
      <Board>
        <div>
          <div>
            🐒<div> More Details:</div>{" "}
            <div>
              <Blue>+ Click to show more</Blue>
            </div>
          </div>
        </div>
      </Board>
    </>
  );
};

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
  // font-size: 0.9rem;
  box-shadow: 1px 6px 15px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  > div:last-child {
    border: none;
  }
  > div > div {
    display: flex;

    & > div:first-child {
      width: 30%;
      color: rgba(0, 0, 0, 0.6);
      padding-left: 1rem;
    }

    & > div:last-child {
      font-size: 0.9rem;
    }
  }
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

const Button = styled.button`
  position: relative;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.8rem;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.025);
  box-shadow: 5px 5px 15px 0.1px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 1);
  }
  transition-duration: 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-sizing: border-box;

  padding: 0.3rem;

  &:focus {
    color: white;
    background-color: #0784c3;
  }
  &:first-child {
    // color: red;
  }
`;

export default ViewInfoComponent;
