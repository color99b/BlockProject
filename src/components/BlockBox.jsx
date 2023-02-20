import styled from "styled-components";
import LineChart from "../components/Chart";
import etherSmall from "../imgs/ethereum-original.svg";
import blockICON from "../imgs/block.gif";
import speed from "../imgs/speed.svg";
import trans from "../imgs/trans.svg";
import internet from "../imgs/internet.svg";
import { useState } from "react";

const BlockBoxComponent = ({ blockArr, setblockArr }) => {
  console.log(blockArr);
  // console.log(new Date(blockArr[0].createdAt).toTimeString().split(" ")[0]);
  return (
    <Main>
      <BlockBox>
        <LeftZone>
          <Fbox>
            <ImgBox>
              <img src={etherSmall} alt="" srcset="" />
            </ImgBox>
            <Vbox>
              <Title>ETHER PRICE</Title>
              <Fbox>$1,694,52 @ 0.06843 BTC (+9.3%)</Fbox>
            </Vbox>
          </Fbox>

          <Fbox>
            <ImgBox>
              {" "}
              <img src={internet} alt="" srcset="" />
            </ImgBox>
            <Vbox>
              <Title>MARKET CAP</Title>
              <Fbox>$204,376,629,849.00</Fbox>
            </Vbox>
          </Fbox>
        </LeftZone>
        <MiddleZone>
          <Fbox>
            <Fbox>
              <ImgBox>
                {" "}
                <img src={trans} alt="" srcset="" />
              </ImgBox>
              <Vbox>
                <Title>TRANSACTIONS</Title>
                <Fbox>1,878.39 M (11.1 TPS)</Fbox>
              </Vbox>
            </Fbox>
            <VboxRight>
              <Fbox>MED GAS PRICE</Fbox>
              <Fbox>20 Gwei ($0.71)</Fbox>
            </VboxRight>
          </Fbox>

          <Fbox>
            <Fbox>
              <ImgBox>
                {" "}
                <img src={speed} alt="" srcset="" />
              </ImgBox>
              <Vbox>
                <Title>LAST FINALIZED BLOCK</Title>
                <Fbox>16662116</Fbox>
              </Vbox>
            </Fbox>
            <VboxRight>
              <Fbox>LAST SAFE BLOCK</Fbox>
              <Fbox>16662147</Fbox>
            </VboxRight>
          </Fbox>
        </MiddleZone>
        <RightZone>
          <LineChart />
          {/* {Chart} */}
        </RightZone>
      </BlockBox>
      <BottomBlockBox>
        <VblockBox>
          <ViewBlockTitle>Latest Blocks</ViewBlockTitle>
          {blockArr.map((element, index) => {
            return (
              <ViewBlockBox key={index}>
                <Fbox>
                  <img src={blockICON} alt="" srcset="" />
                  <Vbox>
                    <div>
                      <Blue>{element.number}</Blue>{" "}
                    </div>
                    <div>{new Date(element.createdAt).toLocaleString()}</div>
                  </Vbox>
                </Fbox>
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
              </ViewBlockBox>
            );
          })}
          {/* <ViewBlockBox>
            <Fbox>
              <img src={blockICON} alt="" srcset="" />
              <Vbox>
                <div>
                  <Blue>166666121</Blue>{" "}
                </div>
                <div>11 seec ago</div>
              </Vbox>
            </Fbox>
            <Vbox>
              <div>
                Fee Recipient <Blue>Flashbots: Builder</Blue>
              </div>
              <div>
                <Blue>146 txns</Blue> in 12 secs
              </div>
            </Vbox>
            <ButtonBox>
              <ButtnDiv>0.03774 Eth</ButtnDiv>
            </ButtonBox>
          </ViewBlockBox> */}
          <ViewAll>VIEW ALL BLOCKS →</ViewAll>
        </VblockBox>
        <VblockBox>
          <Fbox>Latest Transactions</Fbox>
          <Fbox></Fbox>
          <Fbox>VIEW ALL Transactions →</Fbox>
        </VblockBox>
      </BottomBlockBox>
    </Main>
  );
};
const Main = styled.div`
  margin-top: -3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  // background-color: blue;
  padding: 0.7rem 7.5rem 0.5rem 5.5rem;
`;
const LeftZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-width: 70%;
    border-radius: 0;
  }
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  // margin-right: 15px;
`;
const MiddleZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  > div:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    border-radius: 0;
  }

  border-right: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 1.2rem;
`;

const Title = styled.div`
  color: gray;
`;

const RightZone = styled.div`
  width: 100%;
`;

const Fbox = styled.div`
  display: flex;
  border-radius: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ViewAll = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  box-shadow: 1px 6px 15px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.03);
`;

const ViewBlockBox = styled.div`
  display: flex;
  width: 92%;
  justify-content: space-between;
  > div > img {
    width: 3rem;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const ViewBlockTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  text-align: left;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const BottomBlockBox = styled.div`
  display: flex;
  border-radius: 10px;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;

  box-sizing: border-box;
  font-size: 0.8rem;
  > div {
    // padding: 1rem;
  }
`;
const BlockBox = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  justify-content: center;
  wrap: no-wrap;
  align-items: center;
  margin-bottom: 1rem;
  background-color: white;
  padding: 0 1rem;
  box-sizing: border-box;
  font-size: 0.8rem;
  > div {
    gap: 0.5rem;
    padding-right: 1.2rem;
  }
`;

const VblockBox = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);

  border-radius: 10px;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  wrap: no-wrap;
  align-items: center;
  gap: 1rem;
  background-color: white;
  > div:nth-child(6) {
    border: none;
  }
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.7rem;
  > div {
    margin-bottom: 0.3rem;
  }
`;

const VboxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.7rem;
  > div {
    margin-bottom: 0.3rem;
    justify-content: right;
  }
  > div:first-child {
    color: gray;
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 2rem;
    height: 2rem;
  }
`;

const Blue = styled.span`
  color: rgb(7, 132, 195);
`;

const ButtnDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  white-space: pre;
  font-size: 0.7rem;
  font-weight: bold;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default BlockBoxComponent;
