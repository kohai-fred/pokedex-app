import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// import styles from "./index.module.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Pokedex from "./pages/Pokedex";
import store from "./store/store";
import Header from "./components/Header";
import Modal from "./components/Modal";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Modal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:id" element={<Pokemon />} />
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
);
