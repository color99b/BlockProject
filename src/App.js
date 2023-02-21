import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import AddBoardContainer from "./containers/AddBoard";
import HeaderContainer from "./containers/Header";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ViewAllPage from "./pages/ViewAllPage";
function App() {
  return (
    <div className="App">
      <Body>
        <HeaderContainer></HeaderContainer>

        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/viewblock" element={<ViewAllPage />} />
        </Routes>
      </Body>
    </div>
  );
}

const Body = styled.div`
  // padding: 1rem 5rem 5rem 5rem;
  font-family: "sans-serif";
`;
export default App;
