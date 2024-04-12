import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppCotext";
import "./index.css"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename="/blogs-app-context-api">
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </BrowserRouter>
);
