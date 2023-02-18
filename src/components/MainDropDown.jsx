import styled from "styled-components";
import logo from "../imgs/logo-etherscan.svg";
const MainDropDownComponent = () => {
  return (
    <Main>
      <div>
        <img src={logo} alt="" />
      </div>

      <Fbox>
        <div>Home</div>
        <div>BlockChain</div>
        <div>Tokens</div>
        <div>NFTs</div>
        <div>Resources</div>
        <div>Developers</div>
        <div>More</div>
        <div>Sign in</div>
      </Fbox>
    </Main>
  );
};
const Main = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Fbox = styled.div`
  display: flex;
  gap: 1rem;
`;
export default MainDropDownComponent;
