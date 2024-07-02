import React from "react";
import ReactDOM from "react-dom/client";
import App from "./01-app/App";

import { store } from "./01-app/provider/withRedux";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
