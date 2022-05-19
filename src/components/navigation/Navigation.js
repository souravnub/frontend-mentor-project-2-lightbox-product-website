import React, { useState, useEffect } from "react";
import "./navigation.scss";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import deleteIcon from "../../images/icon-delete.svg";
import hammenu from "../../images/icon-menu.svg";
import close from "../../images/icon-close.svg";

const Navigation = ({
    currentCart,
    handleProductRemove,
    setIsSideBarOpen,
    isSideBarOpen,
}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        let c = 0;

        currentCart.forEach((item) => {
            c += item.quantity;
        });

        setItemCount(c);
    }, [currentCart]);

    return (
        <>
            <div
                className={`mobile-menu-sidebar ${
                    isSideBarOpen ? "open" : ""
                }`}>
                <button onClick={() => setIsSideBarOpen(false)}>
                    <img src={close} alt="close-btn" />
                </button>
                <ul>
                    <li>
                        <a href="/">collections</a>
                    </li>
                    <li>
                        <a href="/">men</a>
                    </li>
                    <li>
                        <a href="/">woman</a>
                    </li>
                    <li>
                        <a href="/">about</a>
                    </li>
                    <li>
                        <a href="/">contact</a>
                    </li>
                </ul>
            </div>
            <nav>
                <div className="main-nav-container">
                    <button
                        className="hammenu-btn"
                        onClick={() => setIsSideBarOpen(true)}>
                        <img src={hammenu} alt="hammenu" />
                    </button>

                    <div className="logo">sneakers</div>

                    <ul>
                        <li>
                            <a href="/">collections</a>
                        </li>
                        <li>
                            <a href="/">men</a>
                        </li>
                        <li>
                            <a href="/">woman</a>
                        </li>
                        <li>
                            <a href="/">about</a>
                        </li>
                        <li>
                            <a href="/">contact</a>
                        </li>
                    </ul>

                    <div className="side-container">
                        <button
                            onClick={() => setIsCartOpen((prev) => !prev)}
                            className="cart-btn">
                            <img src={cart} alt="cart icon" />
                            <span>{itemCount}</span>
                        </button>
                        <img src={avatar} alt="user" />

                        <div
                            className={`cart-container ${
                                isCartOpen && "cart-open"
                            }`}>
                            <span>cart</span>
                            <div className="cart-container__main-cart-items-container">
                                {currentCart.length > 0 ? (
                                    currentCart.map((product) => {
                                        const { img, price, quantity, id } =
                                            product;
                                        return (
                                            <div className="cart-item" key={id}>
                                                <img
                                                    src={img}
                                                    alt="product-img"
                                                />

                                                <div className="cart-item__info">
                                                    <span>
                                                        Fall Limited Edition
                                                        Sneakers
                                                    </span>

                                                    <div className="cart-item__info__price-info">
                                                        <div>
                                                            <span>{price}</span>
                                                            <span>x</span>
                                                            <span>
                                                                {quantity}
                                                            </span>
                                                        </div>

                                                        <span>
                                                            ${price * quantity}
                                                            .00
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        handleProductRemove(id)
                                                    }>
                                                    <img
                                                        src={deleteIcon}
                                                        alt="delete product"
                                                    />
                                                </button>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <span className="empty-cart-heading">
                                        your cart is empty
                                    </span>
                                )}
                            </div>
                            {currentCart.length > 0 && (
                                <button>checkout</button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
