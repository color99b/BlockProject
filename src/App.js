import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import AddBoardContainer from "./containers/AddBoard";
import HeaderContainer from "./containers/Header";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route
          path="/new"
          element={<AddBoardContainer>asdasd</AddBoardContainer>}
        />
      </Routes> */}
      <Body>
        <HeaderContainer></HeaderContainer>
        <MainPage></MainPage>
      </Body>
    </div>
  );
}

const Body = styled.div`
  padding: 1rem 5rem 5rem 5rem;
`;
export default App;
