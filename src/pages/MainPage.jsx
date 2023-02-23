import MainDropDownContainer from "../containers/MainDropDown";
import ItemSearchContainer from "../containers/ItemSearch";
import BlockContainer from "../containers/BlockBox";
import FooterContainer from "../containers/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const MainPage = () => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {}, []);
  return (
    <>
      asdasd
      <MainDropDownContainer />
      <ItemSearchContainer />
      <BlockContainer />
      <FooterContainer />
    </>
  );
};

export default MainPage;
