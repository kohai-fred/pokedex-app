import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./pages/App";
// import styles from "./index.module.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Pokedex from "./pages/Pokedex";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                    <Route path="/app" element={<App />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
