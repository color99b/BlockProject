import { useNavigate } from "react-router-dom";
import ItemSearchComponent from "../components/ItemSearch";
const ItemSearchContainer = () => {
  const navigate = useNavigate();

  const searchLink = (item) => {
    navigate(`/info/?${item}`);
  };
  return <ItemSearchComponent move={searchLink} />;
};

export default ItemSearchContainer;
