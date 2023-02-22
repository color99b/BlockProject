import styled from "styled-components";
import MainDropDownContainer from "../containers/MainDropDown";
import ViewBlockContainer from "../containers/ViewBlock";
import FooterContainer from "../containers/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
const ViewAllPage = ({ view }) => {
  const request = axios.create({
    baseURL: "http://localhost:8080/api",
  });
  const [blockArr, setBlockArr] = useState([]);
  const [transactionArr, setTransactionArr] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [viewCount, setViewCount] = useState(20);
  const [blockLength, setBlockLength] = useState();
  const [transactionLength, settransactionLength] = useState();

  async function getBlock(num, viewCount) {
    const data = await request.post("/web3/getList", {
      num: num,
      viewCount: viewCount,
    });
    setBlockArr(data.data.arr);
    setTransactionArr(data.data.transaction);
    setBlockLength(data.data.blockLength);
    settransactionLength(data.data.transactionArrLength);
  }

  useEffect(() => {
    // setBlock(await axios.post("web3/getBlock"));
    getBlock(pageNum, viewCount);
  }, [pageNum]);

  const next = (item) => {
    const arr = item == "block" ? blockArr : transactionArr;
    if (arr.length < viewCount) return;
    setPageNum(pageNum + 1);
  };

  const before = (item) => {
    if (pageNum == 1) return;
    setPageNum(pageNum - 1);
  };

  const first = (item) => {
    if (pageNum == 1) return;
    setPageNum(1);
  };
  const last = (item) => {
    setPageNum(Math.ceil(blockLength / viewCount));
  };
  const pagination = `Page ${pageNum} of ${Math.ceil(blockLength / viewCount)}`;

  const paginationTrans = `Page ${pageNum} of ${Math.ceil(
    transactionLength / viewCount
  )}`;
  return (
    <>
      <MainDropDownContainer />
      <ViewBlockContainer
        blockArr={blockArr}
        transactionArr={transactionArr}
        next={next}
        before={before}
        last={last}
        first={first}
        pagination={pagination}
        view={view}
        paginationTrans={paginationTrans}
      />

      <FooterContainer />
    </>
  );
};

export default ViewAllPage;
