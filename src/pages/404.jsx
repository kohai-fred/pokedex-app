import { Link } from "react-router-dom";
import styles from "./404.module.css";

const Error = ({ error }) => {
    return (
        <main className={styles.page_404}>
            <div>
                <img src="../images/404_txt.webp" alt="" />
                {/* <p>{error.message}</p> */}
                <Link to={"/"}>
                    <button>Retour à l'accueil</button>
                </Link>
            </div>
        </main>
    );
};

export default Error;
