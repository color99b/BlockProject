import styled from "styled-components";
import MainDropDownContainer from "../containers/MainDropDown";
import ViewBlockContainer from "../containers/ViewBlock";
import FooterContainer from "../containers/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
const ViewAllPage = () => {
  const request = axios.create({
    baseURL: "http://localhost:8080/api",
  });
  const [blockArr, setBlockArr] = useState([]);
  const [transactionArr, setTransactionArr] = useState([]);
  // console.log(blockArr);

  useEffect(() => {
    // setBlock(await axios.post("web3/getBlock"));
    async function getBlock() {
      const data = await request.post("/web3/getList");
      setBlockArr(data.data.arr);
      setTransactionArr(data.data.transaction);
    }
    getBlock();
  }, []);
  return (
    <>
      <MainDropDownContainer />
      <ViewBlockContainer blockArr={blockArr} transactionArr={transactionArr} />
      <FooterContainer />
    </>
  );
};

export default ViewAllPage;
