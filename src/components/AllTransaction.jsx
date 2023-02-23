import styled from "styled-components";
import { useNavigate } from "react-router";
const AllTransaction = ({ item }) => {
  const navigate = useNavigate();
  const move = (path) => {
    navigate(path);
  };
  return (
    <tr>
      <td>Info</td>

      <Blue>
        <Move
          onClick={() => {
            move(`/info/?transaction=${item.hash}`);
          }}
        >
          {item.hash.slice(0, 25)}...
        </Move>
      </Blue>

      <Blue>
        <Move
          onClick={() => {
            move(`/info/?block=${item.blockNumber}`);
          }}
        >
          {item.blockNumber}
        </Move>
      </Blue>

      <td>{new Date(item.createdAt).toLocaleString()}</td>

      <Blue>
        <Move
          onClick={() => {
            move(`/wallet/?${item.from}`);
          }}
        >
          {item.from.slice(0, 20)}...
        </Move>
      </Blue>

      <td>→</td>

      <Blue>
        <Move
          onClick={() => {
            move(`/wallet/?${item.to}`);
          }}
        >
          {item.to.slice(0, 20)}...
        </Move>
      </Blue>

      <td>{item.value}</td>

      <td>{item.gas}</td>
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

export default AllTransaction;
