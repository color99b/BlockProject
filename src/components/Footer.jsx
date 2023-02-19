import styled from "styled-components";
import logo from "../imgs/logo-etherscan.svg";
import twitter from "../imgs/twitter.svg";
import reddit from "../imgs/reddit.svg";
import facebook from "../imgs/facebook.png";
import medium from "../imgs/medium.svg";
import etherSmall from "../imgs/ethereum-original.svg";
import map from "../imgs/map.png";

const FooterComponent = () => {
  return (
    <Main>
      <UpBox>
        <EmogeBox>
          <div>
            <img src={twitter} alt="" srcset="" />
          </div>{" "}
          <div>
            <img src={medium} alt="" srcset="" />
          </div>{" "}
          <div>
            <img src={facebook} alt="" srcset="" />
          </div>
          <div>
            <img src={reddit} alt="" srcset="" />
          </div>{" "}
        </EmogeBox>

        <div>back to top</div>
      </UpBox>
      <Hr width="100%" />
      <MidBox>
        <Vbox>
          <div>
            <div>
              <img src={etherSmall} alt="" srcset="" />
            </div>{" "}
            <Title> Powered by Ethereum</Title>
          </div>
          <div>
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </div>
          <div>
            <img src={map} alt="" srcset="" />
          </div>
        </Vbox>
        <Vbox>
          <SubTitle>Company</SubTitle>
          <div>About Us</div>
          <div>Brand Assets</div>
          <div>Contact Us</div>
          <div>
            Careers <Button> We're Hiring!</Button>
          </div>
          <div>Terms of Service</div>
          <div>Bug Bounty</div>
        </Vbox>
        <Vbox>
          <SubTitle>Community</SubTitle>
          <div>API Documentation</div>
          <div>Knowledge Base</div>
          <div>Network Status</div>
          <div>Newsletters</div>
          <div>Disqus Comments</div>
          <div>Bug Bounty</div>
        </Vbox>
        <Vbox>
          <SubTitle>Products & Services</SubTitle>
          <div>Advertise</div>
          <div>Explorer-as-a-Service (EaaS)</div>
          <div>API Plans</div>
          <div>Priority Support</div>
          <div>Blockscan </div>
          <div>Blockscan Chat </div>
        </Vbox>
      </MidBox>

      <DownBox>
        <div>Etherscan © 2023 (F1)</div>
        <div>Donations: 0x71c765...d8976f ❤️</div>
      </DownBox>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  div {
    text-align: left;
  }
`;

const DownBox = styled.div`
  display: flex;
  // border: 1px solid black;
  justify-content: space-between;
  padding: 0.7rem 7.8rem 0.5rem 5.5rem;
  font-size: 0.8rem;
`;
const MidBox = styled.div`
  display: flex;
  // border: 1px solid black;
  justify-content: space-between;
  margin: 0.7rem 7.8rem 0.5rem 5.5rem;
  font-size: 0.8rem;
  > div {
    width: 80%;
  }
  > div:first-child {
    width: 100%;
    margin-right: 2rem;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const EmogeBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-aling: center;
  > div {
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.07);
    padding: 0.3rem;
  }
`;

const UpBox = styled.div`
  display: flex;
  // border: 1px solid black;
  justify-content: space-between;
  > div > div > img {
    width: 1rem;
  }
  padding: 0.7rem 7.8rem 0.5rem 5.5rem;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 1rem;
  }
  > div:first-child {
    // align-items: center;
    display: flex;
    // margin: 0;
  }
  > div > div > img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }
  > div > img {
    width: 80%;
  }
`;
const Title = styled.div`
  font-size: 1.2rem;
  margin-top: 0.3rem;
`;
const SubTitle = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  background-color: rgba(7, 132, 195, 1);
  border-radius: 15px;
  padding: 0.2rem 0.5rem;
  color: white;
  border: none;
  font-size: 0.7rem;
  font-weight: bold;
`;

const Hr = styled.hr`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
  border: 0;
`;
export default FooterComponent;
