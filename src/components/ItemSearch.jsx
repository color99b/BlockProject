import styled from "styled-components";
import pattern from "../imgs/backPattern.jpg";
import searchIcon from "../imgs/search.svg";
import ad from "../imgs/ad.png";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemSearchComponent = ({ move }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("0");
  const location = window.location;

  const alert = () => {
    Swal.fire({
      icon: "error",
      title: "Filter를 선택해주십시오",
      text: "😘",
    });
  };

  const search = (value) => {
    switch (select ? select : "") {
      case "0":
        return alert();
      case "1":
        navigate(`/wallet/?${value}`);
        break;

      case "2":
        navigate(`/info?transaction=${value}`);
        break;

      case "3":
        navigate(`/info?block=${value}`);
        break;
      case "4":
        location.href = `https://www.google.com/search?q=%EB%B0%95%EB%B3%B4%EA%B2%80+%EA%B9%80%EC%9A%B0%EB%B9%88+%EC%A0%95%EC%9A%B0%EC%84%B1+%EA%B9%80%EC%98%81%EC%A4%80+Let%27s+go&rlz=1C1IBEF_koKR1019KR1019&oq=%EB%B0%95%EB%B3%B4%EA%B2%80+%EA%B9%80%EC%9A%B0%EB%B9%88+%EC%A0%95%EC%9A%B0%EC%84%B1+%EA%B9%80%EC%98%81%EC%A4%80+Let%27s+go&aqs=chrome..69i57.11942j0j7&sourceid=chrome&ie=UTF-8`;

        break;

      default:
        console.log(select ? select : "");
        break;
    }
    // move(e.target.value);
  };

  return (
    <Main>
      <Vbox>
        <Title>The Ethereum Blockchain Explorer</Title>
        <SearchBox>
          <Filter>
            <select
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option value="0" selected>
                Filters
              </option>
              <option value="1">Address</option>
              <option value="2">Txn Hash</option>
              <option value="3">Block</option>
              <option value="4">김영준</option>
            </select>
          </Filter>
          <Input>
            <input
              type="text"
              placeholder="Search by Address / Txn Hash / Block / 김영준"
              onInput={(e) => {
                setValue(e.target.value);
              }}
              onKeyDown={(e) => {
                // e.preventDefault();
                if (e.keyCode == 13) {
                  search(value);
                  e.preventDefault();
                }
              }}
            />
          </Input>
          <SearhButton onClick={() => search(value)}>
            <img src={searchIcon} alt="" srcset="" />
          </SearhButton>
        </SearchBox>
        <SubTitle>
          Featured: Etherscan API - Need higher call rates ?{" "}
          <LinkSpan> Sign-up for a dedicated plan today!</LinkSpan>
        </SubTitle>
      </Vbox>

      <AdBox>
        <img src={ad} alt="" srcset="" />
      </AdBox>
    </Main>
  );
};
const Main = styled.div`
  padding-top: 3rem;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 7.5rem 6.5rem 5.5rem;
  // background-image: url();
  background: linear-gradient(
      to right,
      rgba(17, 27, 54, 0.9) 10%,
      rgba(17, 27, 54, 0.5) 70%,
      rgba(17, 27, 54, 0.8)
    ),
    url(${pattern});
  > div:first-child {
    width: 50%;
  }
  z-index: -1;
`;

const Fbox = styled.div`
  display: flex;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  padding: 0.3rem;
  border-radius: 10px;
  gap: 0.5rem;
`;

const Filter = styled.div`
  padding: 0.2rem;
  > select {
    padding: 0.5rem;
    border: none;
  }
`;

const Input = styled.div`
  > input {
    border: none;
    width: 100%;

    padding: 0.5rem;
  }
  width: 100%;
`;

const SearhButton = styled.div`
  margin: 0.2rem;
  background-color: #0784c3;
  padding: 0.4rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 1.3rem;
    filter: invert();
  }
`;

const Title = styled.div`
  font-size: 1.3rem;
`;

const SubTitle = styled.div`
  font-size: 0.9rem;
`;

const LinkSpan = styled.span`
  color: rgba(7, 155, 255, 1);
  font-weight: bold;
`;

const AdBox = styled.div`
  border-radius: 10px;
  margin-right: 5rem;
  overflow: hidden;
`;
export default ItemSearchComponent;
