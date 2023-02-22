import styled from "styled-components";

const AllBlock = ({ item }) => {
  return (
    <tr>
      <td>{item.number}</td>
      <td>8 secs ago</td>
      <td>{item.size}</td>
      <td>{item.miner}</td>
      <td>
        {item.gasUsed}
        {}
      </td>
      <td>{item.gasLimit}</td>
      <td>{item.difficulty}</td>
      <td>{Math.random().toFixed(3)} ETH</td>
      <td>
        {Math.random().toFixed(3)}({(Math.random() * 9).toFixed(3)}%)
      </td>
    </tr>
  );
};

export default AllBlock;
