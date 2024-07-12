import React from "react";
import PropTypes from "prop-types";

const Star = ({ className }) => {
    return (
        <svg className={className} width="15.000000" height="15.000000" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <desc>Created with Pixso.</desc>
            <defs />
            <rect id="Iconly/Bold/Star" width="15.000000" height="15.000000" fill="#FFFFFF" fillOpacity="0" />
            <path
                id="Star"
                d="M11.19 8.95C11.03 9.1 10.96 9.33 10.99 9.55L11.55 12.63C11.6 12.89 11.49 13.15 11.27 13.3C11.06 13.46 10.77 13.48 10.54 13.35L7.77 11.91C7.67 11.86 7.57 11.83 7.46 11.83L7.29 11.83C7.23 11.83 7.17 11.85 7.12 11.88L4.35 13.33C4.21 13.4 4.06 13.43 3.91 13.4C3.54 13.33 3.29 12.98 3.35 12.61L3.91 9.53C3.94 9.31 3.87 9.08 3.71 8.92L1.45 6.73C1.26 6.55 1.2 6.27 1.28 6.03C1.37 5.78 1.58 5.6 1.84 5.56L4.94 5.11C5.18 5.08 5.39 4.94 5.49 4.73L6.86 1.92C6.9 1.86 6.94 1.8 6.99 1.75L7.04 1.71C7.07 1.68 7.11 1.65 7.14 1.63L7.21 1.6L7.32 1.56L7.58 1.56C7.82 1.58 8.02 1.72 8.13 1.93L9.52 4.73C9.62 4.93 9.81 5.07 10.04 5.11L13.14 5.56C13.41 5.6 13.63 5.78 13.71 6.03C13.79 6.28 13.72 6.55 13.53 6.73L11.19 8.95Z"
                fill="#C4C4C4"
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
        </svg>
    );
};

Star.propTypes = {
    className: PropTypes.string,
};

export default Star;
