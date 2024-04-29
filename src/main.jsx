import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./сomponents/App";

import { GlobalStyle } from "./сomponents/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/react-vite-template">
            <Provider store={store}>
                <PersistGate persistor={persistor}></PersistGate>
                <App />
                <GlobalStyle />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
