import React from "react";
import garden from "/src/07-shared/assets/images/FooterIcon/garden.svg";
import plant from "/src/07-shared/assets/images/FooterIcon/plant.svg";
import watering from "/src/07-shared/assets/images/FooterIcon/watering.svg";
import styled from "./TopFooterBlock.module.scss";

import ServicesBlock from "./TopFooterElement/ServicesBlock";
import SubscribeNewsletter from "./TopFooterElement/SubscribeNewsletter";

const MENU_LIST = [
    { srcImage: garden, title: "Garden Care", description: "We are an online plant shop offering a wide range of cheap and trendy plants." },
    { srcImage: plant, title: "Plant Renovation", description: "We are an online plant shop offering a wide range of cheap and trendy plants." },
    { srcImage: watering, title: "Watering Garden", description: "We are an online plant shop offering a wide range of cheap and trendy plants." },
];

const TopFooterBlock = () => {
    return (
        <div className={styled["services"]}>
            <ul className={styled["menu-list"]}>
                {MENU_LIST.map(({ srcImage, title, description }, index) => (
                    <ServicesBlock key={index} srcImage={srcImage} title={title} description={description} />
                ))}
            </ul>
            <SubscribeNewsletter />
        </div>
    );
};

export default TopFooterBlock;
