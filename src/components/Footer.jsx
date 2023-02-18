import styled from "styled-components";
import logo from "../imgs/logo-etherscan.svg";
const FooterComponent = () => {
  return (
    <Main>
      <Fbox>
        <div>이모지</div>
        <div>back to top</div>
      </Fbox>
      <hr width="100%" rgba="0,0,0,0.5" />
      <Fbox>
        <Vbox>
          <div>🔺 Powered by Ethereum</div>
          <div>
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </div>
        </Vbox>
        <Vbox>
          <div>Company</div>
          <div>About Us</div>
          <div>Brand Assets</div>
          <div>Contact Us</div>
          <div>Careers We're Hiring!</div>
          <div>Terms of Service</div>
          <div>Bug Bounty</div>
        </Vbox>
        <Vbox>
          <div>Community</div>
          <div>API Documentation</div>
          <div>Knowledge Base</div>
          <div>Network Status</div>
          <div>Newsletters</div>
          <div>Disqus Comments</div>
          <div>Bug Bounty</div>
        </Vbox>
        <Vbox>
          <div>Products & Services</div>
          <div>Advertise</div>
          <div>Explorer-as-a-Service (EaaS)</div>
          <div>API Plans</div>
          <div>Priority Support</div>
          <div>Blockscan </div>
          <div>Blockscan Chat </div>
        </Vbox>
      </Fbox>
      <hr width="100%" rgba="0,0,0,0.5" />
      <Fbox>
        <div>Etherscan © 2023 (F1)</div>
        <div>Donations: 0x71c765...d8976f ❤️</div>
      </Fbox>
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

const Fbox = styled.div`
  display: flex;
  // border: 1px solid black;
  justify-content: space-between;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export default FooterComponent;
