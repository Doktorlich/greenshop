import React from "react";
import PropTypes from "prop-types";

const ArrowLineLink = ({ className }) => {
    return (
        <svg className={className} width="15.960083" height="16.000000" viewBox="0 0 15.9601 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs />
            <rect id="Iconly/Light-Outline/Arrow - Right" width="15.960079" height="16.000000" fill="#FFFFFF" fillOpacity="0" />
            <path
                id="Stroke 1"
                d="M2.66 7.81C2.66 7.56 2.84 7.35 3.09 7.32L3.15 7.31L13.13 7.31C13.4 7.31 13.63 7.54 13.63 7.81C13.63 8.07 13.44 8.27 13.2 8.31L13.13 8.31L3.15 8.31C2.88 8.31 2.66 8.09 2.66 7.81Z"
                fill="#3D3D3D"
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
            <path
                id="Stroke 3"
                d="M8.75 4.15C8.56 3.96 8.56 3.64 8.75 3.44C8.93 3.27 9.21 3.25 9.4 3.39L9.46 3.44L13.48 7.46C13.66 7.64 13.68 7.91 13.53 8.11L13.48 8.17L9.46 12.18C9.26 12.38 8.95 12.38 8.75 12.18C8.58 12 8.56 11.73 8.71 11.53L8.75 11.47L12.42 7.81L8.75 4.15Z"
                fill="#3D3D3D"
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
        </svg>
    );
};

ArrowLineLink.propTypes = {
    className: PropTypes.string,
};

export default ArrowLineLink;
