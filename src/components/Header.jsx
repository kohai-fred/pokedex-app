import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const { filteredList } = useSelector((state) => state.pokedex);
    return (
        <header className={styles.header}>
            <ul>
                <li>
                    <Link to={"/"}>
                        <img src="../images/pokeball.webp" alt="logo pokeball" />
                    </Link>
                </li>

                <li>
                    <Link to={"/pokedex"}>
                        <img src="../images/pokedex_title.webp" alt="police-pokemon pokedex" />
                    </Link>
                    <span> {filteredList.length} </span>
                </li>
            </ul>
        </header>
    );
};

export default Header;
