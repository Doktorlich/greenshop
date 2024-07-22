import React from "react";
import PropTypes from "prop-types";

const Option = ({ children, value, className, disabled, selected, hidden }) => {
    return (
        <option value={value} className={className} disabled={disabled} selected={selected}
                hidden={hidden}>
            {children}
        </option>
    );
};

Option.propTypes = {
    children: PropTypes.node,
    value: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    hidden: PropTypes.bool,
};

export default Option;