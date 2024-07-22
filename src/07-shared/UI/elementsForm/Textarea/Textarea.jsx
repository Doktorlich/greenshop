import React from "react";
import PropTypes from "prop-types";
import styled from "./Textarea.module.scss";

const Textarea = ({ id, name, rows, cols, className, onChange, value }) => {
    return (
        <textarea id={id} name={name} rows={rows} cols={cols} className={[styled[""], className].join(" ")}
                  value={value} onChange={onChange} />


    );
};

Textarea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,

    onChange: PropTypes.func,

};

export default Textarea;