import { useState } from "react";
import ViewBlockComponent from "../components/ViewBlock";

const ViewBlockContainer = ({
  blockArr,
  transactionArr,
  next,
  before,
  last,
  first,
  pagination,
  view,
  paginationTrans,
}) => {
  return (
    <ViewBlockComponent
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
  );
};

export default ViewBlockContainer;
