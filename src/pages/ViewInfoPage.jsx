import MainDropDownContainer from "../containers/MainDropDown";
import FooterContainer from "../containers/Footer";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NotFoundComponent from "../components/NotFound";
import ViewInfoComponent from "../components/ViewInfoComponent";
const ViewInfoPage = () => {
  const request = axios.create({
    baseURL: "http://localhost:8080/api",
  });
  const location = useLocation();
  const typeArr = location.search.split("=");
  const type = typeArr[0].slice(1);
  const typeNum = typeArr[1];
  const [info, setInfo] = useState();
  async function getInfo(type, value) {
    const { data } = await request.post("/web3/getInfo", {
      value: value,
      type: type,
    });

    setInfo(data.info);
  }
  useEffect(() => {
    getInfo(type, typeNum);
  }, []);

  return (
    <>
      <MainDropDownContainer />

      {info ? (
        <>
          <Main>
            <div>
              <BlockSpan>
                <WeightFont>
                  {type == "block" ? "Blocks" : "Transactions"}
                </WeightFont>
              </BlockSpan>
            </div>
            <hr />
            <div>
              <GraySpan>
                <WeightFont> Featured: </WeightFont>
              </GraySpan>
              <GraySpan>
                Bridging tokens between Ethereum, Layer 2 and other chains?
                Browse through the Blockscan
              </GraySpan>{" "}
              <Blue>
                <WeightFont> bridges list. </WeightFont>
              </Blue>
            </div>
            <ButtonBox>
              <Button>Overview</Button>
              <Button>Consensus Info</Button>
              <Button>MEV Info</Button>
              <Button>Comments</Button>
            </ButtonBox>

            {info ? <ViewInfoComponent info={info} type={type} /> : <>123</>}
            {/* <ViewInfoComponent info={info} type={type} /> */}

            <FootAlert>
              💡 Blocks are batches of transactions linked together via
              cryptographic hashes. Any tampering of a block invalidates
              subsequent blocks as their hashes would be changed. Learn more
              about this page in our Knowledge Base.
            </FootAlert>
          </Main>
        </>
      ) : (
        <NotFoundComponent text={typeNum} type={type} />
      )}
      <FooterContainer />
    </>
  );
};

const Main = styled.div`
  padding: 2rem 7.5rem 6.5rem 5.5rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px 0.1px rgba(0, 0, 0, 0.1);
`;

const ButtonBox = styled.div`
  display: flex;
  padding: 0.5rem 0;
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

export default ViewInfoPage;
