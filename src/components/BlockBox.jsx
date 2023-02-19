import styled from "styled-components";
import LineChart from "../components/Chart";
import etherSmall from "../imgs/ethereum-original.svg";

import speed from "../imgs/speed.svg";
import trans from "../imgs/trans.svg";
import internet from "../imgs/internet.svg";
import { useState } from "react";

const BlockBoxComponent = () => {
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
          <Fbox>Latest Blocks</Fbox>
          <Fbox></Fbox>
          <Fbox>VIEW ALL BLOCKS →</Fbox>
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
    padding: 1rem;
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
  gap: 5rem;
  background-color: white;
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
export default BlockBoxComponent;
