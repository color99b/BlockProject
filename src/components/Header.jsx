import styled from "styled-components";
import etherSmall from "../imgs/ethereum-original.svg";
import gas from "../imgs/gas.svg";
const HeaderComponent = () => {
  return (
    <>
      <FixHead>
        <LeftZone>
          <div>
            ETH Price: <Price>$ {(Math.random() * 10 + 1).toFixed(3)}</Price>{" "}
            <PricePercent>(-0.19%)</PricePercent>
          </div>

          <Fbox>
            <div>
              {" "}
              <img src={gas} alt="" width={"20rem"} />
            </div>
            <div>
              {" "}
              Gas:<Price>{(Math.random() * 10 + 1).toFixed(3)} Gwei</Price>{" "}
            </div>
          </Fbox>
        </LeftZone>

        <RightZone>
          <div>
            <HeaderButton>
              <img src={etherSmall} alt="" width={"15rem"} />
            </HeaderButton>
          </div>
          <div>
            <HeaderButton>
              <img src={etherSmall} alt="" width={"15rem"} />
            </HeaderButton>
          </div>
        </RightZone>
      </FixHead>
    </>
  );
};
const FixHead = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.9rem;
  // padding: 0.7rem 0rem 0.5rem 5.5rem;
  border-bottom: 1px solid lightGray;
  background-color: white;
`;

const Fbox = styled.div`
  display: flex;
`;

const LeftZone = styled.div`
  display: flex;
  gap: 1rem;
  div:last-child {
    div:first-child {
      margin-right: 0.3rem;
    }
  }
  padding: 0.7rem 0rem 0.5rem 5.5rem;
`;

const RightZone = styled.div`
  display: flex;
  gap: 1rem;
  div:last-child {
    div:first-child {
      margin-right: 0.3rem;
    }
  }
  padding: 0.3rem 7.5rem 0 0rem;
`;

const Price = styled.span`
  color: darkblue;
`;

const PricePercent = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const HeaderButton = styled.button`
  > img {
    width: 0.75rem;
  }
  border: 1px solid lightGray;
  background-color: white;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  border-radius: 10px;
`;

export default HeaderComponent;
