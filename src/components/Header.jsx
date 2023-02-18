import styled from "styled-components";
import etherSmall from "../imgs/ethereum-original.svg";
import gas from "../imgs/gas.svg";
const HeaderComponent = () => {
  return (
    <>
      <FixHead>
        <Fbox>
          <div> ETH Price: $ {Math.random() * 9 + 1}</div>

          <Fbox>
            <div>
              {" "}
              <img src={gas} alt="" width={"20rem"} />
            </div>
            <div> Gas:{Math.random() * 9 + 1} Gwei </div>
          </Fbox>
        </Fbox>

        <Fbox>
          <div>
            <img src={etherSmall} alt="" width={"15rem"} />
          </div>
          <div>
            <img src={etherSmall} alt="" width={"15rem"} />
          </div>
        </Fbox>
      </FixHead>
    </>
  );
};
const FixHead = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Fbox = styled.div`
  display: flex;
`;
export default HeaderComponent;
