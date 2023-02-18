import styled from "styled-components";
import MainDropDownComponent from "../components/MainDropDown";
const MainDropDownContainer = () => {
  return <MainDropDownComponent />;
};
const FixHead = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Fbox = styled.div`
  display: flex;
`;
export default MainDropDownContainer;
