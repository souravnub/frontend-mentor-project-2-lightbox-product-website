import { useState, useEffect } from "react";
import LightBox from "./components/lightbox/LightBox";
import Navigation from "./components/navigation/Navigation";
import ProductInfo from "./components/products info/ProductInfo";
import ResponsiveCarosuel from "./components/responsive-carosuel/Responsive-carosuel";
import "./index.scss";

function App() {
    const [cart, setCart] = useState([]);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

    const handleAddtoCart = (product) => {
        if (product.quantity === 0) {
            return;
        }
        setCart((prev) => [...prev, product]);
    };
    const handleProductRemove = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <main className="App">
            <div
                className={`body-fade ${
                    isSideBarOpen ? "body-fade-show" : "body-fade-hide"
                }`}></div>
            <LightBox
                setIsLightBoxOpen={setIsLightBoxOpen}
                isLightBoxOpen={isLightBoxOpen}
            />
            <Navigation
                currentCart={cart}
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
                handleProductRemove={handleProductRemove}
            />
            <div className="main-app-container">
                <ResponsiveCarosuel
                    isLightBoxOpen={isLightBoxOpen}
                    setIsLightBoxOpen={setIsLightBoxOpen}
                />
                <ProductInfo handleAddtoCart={handleAddtoCart} />
            </div>
        </main>
    );
}

export default App;
