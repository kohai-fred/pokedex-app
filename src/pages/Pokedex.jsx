import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
// import styles from "./Pokedex.module.css";
import styles from "./Home.module.css";
import List from "../components/List";

const Pokedex = () => {
    const { pokedex, filteredList } = useSelector((state) => state.pokedex);
    return <List filteredList={filteredList} baseList={pokedex} from={"pokedex"} />;
};

export default Pokedex;
