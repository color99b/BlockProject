import styled from "styled-components";
import Rechart from "../components/Chart";
const BlockBoxComponent = () => {
  return (
    <Main>
      <BlockBox>
        <LeftZone>
          <Fbox>
            <ImgBox>🔺</ImgBox>
            <Vbox>
              <Fbox>ETHER PRICE</Fbox>
              <Fbox>$1,694,52 @ 0.06843 BTC (+9.3%)</Fbox>
            </Vbox>
          </Fbox>

          <Fbox>
            <ImgBox>🔺</ImgBox>
            <Vbox>
              <Fbox>ETHER PRICE</Fbox>
              <Fbox>$1,694,52 @ 0.06843 BTC (+9.3%)</Fbox>
            </Vbox>
          </Fbox>
        </LeftZone>
        <MiddleZone>
          <Fbox>
            <Fbox>
              <ImgBox>🔺</ImgBox>
              <Vbox>
                <Fbox>ETHER PRICE</Fbox>
                <Fbox>$1,694,52 @ 0.06843 BTC (+9.3%)</Fbox>
              </Vbox>
            </Fbox>
            <Vbox>
              <Fbox>MED GAS PRICE</Fbox>
              <Fbox>52 Gwei($1.85)</Fbox>
            </Vbox>
          </Fbox>

          <Fbox>
            <Fbox>
              <ImgBox>🔺</ImgBox>
              <Vbox>
                <Fbox>ETHER PRICE</Fbox>
                <Fbox>$1,694,52 @ 0.06843 BTC (+9.3%)</Fbox>
              </Vbox>
            </Fbox>
            <Vbox>
              <Fbox>MED GAS PRICE</Fbox>
              <Fbox>52 Gwei($1.85)</Fbox>
            </Vbox>
          </Fbox>
        </MiddleZone>
        <RightZone>
          <Rechart />
        </RightZone>
      </BlockBox>
      <Fbox>
        <VblockBox>
          <Fbox>Latest Blocks</Fbox>
          <Fbox>
            <div id="tempWallet">temp</div>
          </Fbox>
          <Fbox>VIEW ALL BLOCKS →</Fbox>
        </VblockBox>
        <VblockBox>
          <Fbox>Latest Transactions</Fbox>
          <Fbox></Fbox>
          <Fbox>VIEW ALL Transactions →</Fbox>
        </VblockBox>
      </Fbox>
    </Main>
  );
};
const Main = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const LeftZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const MiddleZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RightZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Fbox = styled.div`
  display: flex;
  border-radius: 10px;
  width: 100%;
  justify-content: space-between;
`;
const BlockBox = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  justify-content: center;
  wrap: no-wrap;
  align-items: center;
  gap: 5rem;
`;

const VblockBox = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  wrap: no-wrap;
  align-items: center;
  gap: 5rem;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
`;
export default BlockBoxComponent;
