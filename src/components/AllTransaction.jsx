import styled from "styled-components";

const AllTransaction = ({ item }) => {
  return (
    <tr>
      <td>Info</td>

      <Blue>
        <Move href={`/info/?transaction=${item.hash}`}>
          {item.hash.slice(0, 25)}...
        </Move>
      </Blue>

      <Blue>
        <Move href={`/info/?block=${item.blockNumber}`}>
          {item.blockNumber}
        </Move>
      </Blue>

      <td>{new Date(item.createdAt).toLocaleString()}</td>

      <Blue>
        <Move href={`/wallet/?${item.from}`}>{item.from.slice(0, 20)}...</Move>
      </Blue>

      <td>→</td>

      <Blue>
        <Move href={`/wallet/?${item.to}`}>{item.to.slice(0, 20)}...</Move>
      </Blue>

      <td>{item.value}</td>

      <td>{item.gas}</td>
    </tr>
  );
};

const Move = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Blue = styled.td`
  color: rgba(100, 100, 255, 0.9);
`;

export default AllTransaction;
