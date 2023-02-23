import styled from "styled-components";
import { useNavigate } from "react-router";
const AllBlock = ({ item }) => {
  const navigate = useNavigate();
  const move = (path) => {
    navigate(path);
  };
  return (
    <tr>
      <Blue>
        <Move
          onClick={() => {
            move(`/info/?block=${item.number}`);
          }}
        >
          {item.number}
        </Move>
      </Blue>
      <td>8 secs ago</td>
      <Blue>
        <Move
          onClick={() => {
            move(item.txns ? `/info/?transaction=${item.transactions}` : "");
          }}
        >
          {item.txns ? item.txns : 0}
        </Move>
      </Blue>
      <Blue>
        <Move
          onClick={() => {
            move(`/wallet/?${item.miner}`);
          }}
        >
          {item.miner}
        </Move>
      </Blue>
      <td>{item.gasUsed}</td>
      <td>{item.gasLimit}</td>
      <td>{item.difficulty}</td>
      <td>{Math.random().toFixed(3)} ETH</td>
      <td>
        {Math.random().toFixed(3)}({(Math.random() * 9).toFixed(3)}%)
      </td>
    </tr>
  );
};
const Move = styled.div`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Blue = styled.td`
  color: rgba(100, 100, 255, 0.9);
`;

export default AllBlock;
