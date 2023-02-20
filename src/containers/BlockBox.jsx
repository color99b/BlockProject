import styled from "styled-components";
import BlockBoxComponent from "../components/BlockBox";
import Web3 from "web3";
import axios from "axios";
import { useEffect, useState } from "react";

const BlockContainer = () => {
  const request = axios.create({
    baseURL: "http://localhost:8080/api",
  });
  const [blockArr, setBlockArr] = useState([]);
  useEffect(() => {
    // setBlock(await axios.post("web3/getBlock"));
    async function getBlock() {
      const data = await request.post("/web3/getBlock");
      console.log(data.data);
      setBlockArr(data.data.arr);
    }
    getBlock();
  }, []);
  return <BlockBoxComponent blockArr={blockArr} setBlockArr={setBlockArr} />;
};

const Fbox = styled.div`
  display: flex;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export default BlockContainer;
