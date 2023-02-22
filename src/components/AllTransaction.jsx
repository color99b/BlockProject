import styled from "styled-components";

const AllTransaction = ({ item }) => {
  return (
    <tr>
      <td>Info</td>
      <td>{item.hash.slice(0, 25)}...</td>
      <td>{item.blockNumber}</td>
      <td>{new Date(item.createdAt).toLocaleString()}</td>

      <td>{item.from.slice(0, 20)}...</td>
      <td>→</td>

      <td>{item.to.slice(0, 20)}...</td>

      <td>{item.value}</td>

      <td>{item.gas}</td>
    </tr>
  );
};

export default AllTransaction;
