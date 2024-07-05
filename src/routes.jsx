import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TokenGenerator from "./pages/TokenGenerator";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/token-generator" element={ <TokenGenerator /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;