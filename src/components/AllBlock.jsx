import styled from "styled-components";

const AllBlock = ({ item }) => {
  console.log(item);
  return (
    <tr>
      <Blue>
        <Move href={`/info/?block=${item.number}`}>{item.number}</Move>
      </Blue>
      <td>8 secs ago</td>
      <Blue>
        <Move href={item.txns ? `/info/?transaction=${item.transactions}` : ""}>
          {item.txns ? item.txns : 0}
        </Move>
      </Blue>
      <Blue>
        <Move href={`/wallet/?${item.miner}`}>{item.miner}</Move>
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
const Move = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Blue = styled.td`
  color: rgba(100, 100, 255, 0.9);
`;

export default AllBlock;
