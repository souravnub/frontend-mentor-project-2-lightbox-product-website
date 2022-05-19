import React from "react";
import ResponsiveCarosuel from "../responsive-carosuel/Responsive-carosuel";
import { IoMdClose } from "react-icons/io";
import "./lightbox.scss";
const LightBox = ({ setIsLightBoxOpen, isLightBoxOpen }) => {
    return (
        <div
            className={`light-box-container ${
                isLightBoxOpen ? "light-box-show" : "light-box-hide"
            }`}>
            <div>
                <button onClick={() => setIsLightBoxOpen(false)}>
                    <IoMdClose className="icon" />
                </button>
                <ResponsiveCarosuel
                    setIsLightBoxOpen={setIsLightBoxOpen}
                    isLightBoxOpen={isLightBoxOpen}
                />
            </div>
        </div>
    );
};

export default LightBox;
