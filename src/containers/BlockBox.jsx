import styled from "styled-components";
import BlockBoxComponent from "../components/BlockBox";
import Web3 from "web3";
const BlockContainer = () => {
  return <BlockBoxComponent />;
};

const Fbox = styled.div`
  display: flex;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export default BlockContainer;
