import { useSelector } from "react-redux";
import List from "../components/List";

function Home() {
    const { baseList, filteredList } = useSelector((state) => state.pokemonsList);

    return <List filteredList={filteredList} baseList={baseList} from={"home"} />;
}

export default Home;
