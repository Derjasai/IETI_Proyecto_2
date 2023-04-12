import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/home";
import App from "./App";
import AboutUs from "./pages/aboutUs";

function MenuRouter(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/SobreNosotros" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MenuRouter;