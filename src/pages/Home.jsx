import { useSelector } from "react-redux";
import List from "../components/List";
import Error from "./404";

function Home() {
    const { baseList, filteredList, error } = useSelector((state) => state.pokemonsList);
    console.log("🚀 ~ file: home.jsx ~ line 6 ~ Home ~ error", error);
    if (error) return <Error error={error} />;

    return <List filteredList={filteredList} baseList={baseList} from={"home"} />;
}

export default Home;
