import React, { useState } from "react";
import "./productInfo.scss";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart.svg";
import productImg from "../../images/image-product-1-thumbnail.jpg";

const ProductInfo = ({ handleAddtoCart }) => {
    const [quantity, setQuantity] = useState(0);

    const handleDecQuan = () => {
        if (!(quantity - 1 < 0)) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <div className="product-info-container">
            <span className="clr-orange">sneaker company</span>
            <h1>fall limited edition sneakers</h1>

            <p>
                The low-profile sneakers are you prefect casual wear compnion.
                Featuring a durable rubber outer sole, they'll withstand
                everything the weather can offer.
            </p>

            <div className="price-section">
                <div className="head">
                    <span className="heading">$125.00</span>
                    <span className="clr-orange">50%</span>
                </div>
                <span>$250.00</span>
            </div>

            <div className="main-actions-container">
                <div className="actions">
                    <button onClick={handleDecQuan}>
                        <img src={minus} alt="minus icon" />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity((prev) => prev + 1)}>
                        <img src={plus} alt="plus icon" />
                    </button>
                </div>

                <button
                    onClick={() =>
                        handleAddtoCart({
                            img: productImg,
                            quantity,
                            price: 125,
                            id: Date.now(),
                        })
                    }>
                    <img src={cart} alt="cart" />
                    <span>add to cart</span>
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
