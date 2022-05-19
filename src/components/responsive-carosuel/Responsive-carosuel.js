import React, { useState, useEffect } from "react";

import ProductImg1 from "../../images/image-product-1-thumbnail.jpg";
import ProductImg2 from "../../images/image-product-2-thumbnail.jpg";
import ProductImg3 from "../../images/image-product-3-thumbnail.jpg";
import ProductImg4 from "../../images/image-product-4-thumbnail.jpg";
import arrowNext from "../../images/icon-next.svg";
import arrowBack from "../../images/icon-previous.svg";

import "./responsive-carousel.scss";

const ResponsiveCarosuel = ({ isLightBoxOpen, setIsLightBoxOpen }) => {
    const imgArr = [ProductImg1, ProductImg2, ProductImg3, ProductImg4];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndexDec = () => {
        if (!(activeIndex - 1 < 0)) {
            setActiveIndex((prev) => prev - 1);
        } else {
            setActiveIndex(imgArr.length - 1);
        }
    };
    const handleIndexInc = () => {
        if (!(activeIndex + 1 > imgArr.length - 1)) {
            setActiveIndex((prev) => prev + 1);
        } else {
            setActiveIndex(0);
        }
    };

    const handleShowLightBox = () => {
        if (!isLightBoxOpen) {
            return setIsLightBoxOpen(true);
        }
    };

    return (
        <div className="main-carousel-container">
            <div className="main-carousel-container__img-display">
                <button
                    className="prev-img-btn"
                    onClick={handleIndexDec}
                    style={
                        isLightBoxOpen
                            ? {
                                  display: "flex",
                                  left: "0%",
                                  transform: "translateX(-50%)",
                              }
                            : {}
                    }>
                    <img src={arrowBack} alt="arrow back" />
                </button>

                <button
                    className="light-box-btn"
                    onClick={handleShowLightBox}
                    style={isLightBoxOpen ? { cursor: "auto" } : {}}>
                    <img
                        src={imgArr[activeIndex]}
                        alt="product-img"
                        style={isLightBoxOpen ? { minWidth: "100%" } : {}}
                    />
                </button>

                <button
                    className="next-img-btn"
                    onClick={handleIndexInc}
                    style={
                        isLightBoxOpen
                            ? {
                                  display: "flex",
                                  right: "0%",
                                  transform: "translateX(50%)",
                              }
                            : {}
                    }>
                    <img src={arrowNext} alt="arrow next" />
                </button>
            </div>
            <div className="main-carousel-container__img-navigation-container">
                {imgArr.map((img, index) => (
                    <button
                        key={img}
                        className={activeIndex === index ? "active" : ""}
                        onClick={() => setActiveIndex(index)}>
                        <img src={img} alt="product-img" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ResponsiveCarosuel;
