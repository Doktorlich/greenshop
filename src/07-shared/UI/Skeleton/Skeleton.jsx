import React from "react";
import styled from "./Skeleton.module.scss";
import PropTypes from "prop-types";

const Skeleton = ({ children, className }) => {
    return (
        <div className={[styled["skeleton"], className].join(" ")}>
            
            {children}

        </div>
    );
};

export default Skeleton;


Skeleton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
