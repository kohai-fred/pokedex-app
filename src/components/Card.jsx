import { Link } from "react-router-dom";
import changeImgSrc from "../utils/js/changeImgSrc";
import img_urls from "../utils/js/img_urls";
import ButtonAddRemove from "./ButtonAddRemove";
import styles from "./Card.module.css";
import Spinner from "./Spinner";

function Card({ pokemon, reset }) {
    const { name, id } = pokemon;
    const src = img_urls(pokemon.id);

    return (
        <>
            {!pokemon ? (
                <Spinner />
            ) : (
                <li className={styles.card} id={id}>
                    <p className={styles.card_title}> {name} </p>
                    <Link to={`/pokemon/${id}`} className={styles.card_img_link} onClick={reset}>
                        <div className={styles.card_img_container}>
                            <img
                                className={styles.card_img}
                                loading="lazy"
                                src={src.src_official}
                                onError={(e) => changeImgSrc(e, src)}
                            />
                        </div>
                    </Link>
                    <ButtonAddRemove pokemon={pokemon} />
                </li>
            )}
        </>
    );
}

export default Card;
