import styled from "styled-components";
import pattern from "../imgs/backPattern.jpg";
import searchIcon from "../imgs/search.svg";
import ad from "../imgs/ad.png";

const ItemSearchComponent = () => {
  return (
    <Main>
      <Vbox>
        <Title>The Ethereum Blockchain Explorer</Title>
        <SearchBox>
          <Filter>
            <select>
              <option value="0" selected>
                All Filters
              </option>
              <option value="1">Address</option>
              <option value="2">Tokens</option>
              <option value="3">NameTags</option>
              <option value="4">Labels</option>
            </select>
          </Filter>
          <Input>
            <input
              type="text"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
            />
          </Input>
          <SearhButton>
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
  color: blue;
`;

const AdBox = styled.div`
  border-radius: 10px;
  margin-right: 5rem;
  overflow: hidden;
`;
export default ItemSearchComponent;
