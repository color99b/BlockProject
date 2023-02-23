import styled from "styled-components";
import notFound from "../imgs/notFound.svg";
import { useNavigate } from "react-router";
const NotFoundComponent = ({ text, type }) => {
  const navigate = useNavigate();
  const move = (path) => {
    navigate(path);
  };
  return (
    <>
      <NotFound>
        <div>
          <div>Search not found : 404</div>
          <div>
            Oops! 당신이 검색한 키워드:{" "}
            <span style={{ fontSize: "1.2rem", color: "rgba(0,0,255,0.6)" }}>
              {" "}
              {`${decodeURI(text)}`}
            </span>
          </div>
          <div>
            Sorry! 이런
            <span style={{ fontSize: "1.2rem", color: "rgba(0,0,255,0.6)" }}>
              {" "}
              {`${type ? type + " " : "data"}`}
            </span>
            존재하지 않아요~
          </div>
        </div>
        <div>
          If you think this is a problem with us, please tell 010-2361-2744.
        </div>
        <div>
          <Move
            onClick={() => {
              move("/");
            }}
          >
            <ButtonHome>Back Home</ButtonHome>
          </Move>
        </div>
      </NotFound>
    </>
  );
};

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-image: url(${notFound});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 30rem;
  overflow: hidden;
  padding: 6rem 6rem 0 10rem;
  > div {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
  }
  > div > div {
    margin-bottom: 0.3rem;
  }
  > div > div:first-child {
    color: rgba(0, 0, 255, 0.4);
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const Move = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const ButtonHome = styled.button`
  position: relative;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgba(0, 0, 255, 0.3);
  box-shadow: 5px 5px 15px 0.1px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 255, 0.1);
    color: rgba(0, 0, 0, 0.5);
  }
  transition-duration: 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-sizing: border-box;

  padding: 0.5rem 1rem;

  &:focus {
    color: white;
    background-color: #0784c3;
  }
  &:first-child {
    // color: red;
  }
`;

export default NotFoundComponent;
