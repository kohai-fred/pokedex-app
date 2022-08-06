import { useSelector } from "react-redux";
import List from "../components/List";

const Pokedex = () => {
    const { pokedex, filteredList } = useSelector((state) => state.pokedex);
    return <List filteredList={filteredList} baseList={pokedex} from={"pokedex"} />;
};

export default Pokedex;
