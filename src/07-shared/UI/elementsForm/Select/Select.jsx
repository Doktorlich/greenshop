import React from "react";
import PropTypes from "prop-types";

const Select = ({
                    children, name, id, className, required, onChange,
                }) => {
    return (
        <select name={name} id={id} className={className} required={required} onChange={onChange}
        >
            {children}
        </select>
    );
};

Select.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
  
    required: PropTypes.bool,


    onChange: PropTypes.func,
};

export default Select;