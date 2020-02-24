import React from "react";

function RadioBlock({ input, label }) {
    return (
        <label className="select-position__label">
            <input {...input} className="select-position__radio" />
            <span className="radio-style"></span>
            <span className="select-position__radio-descript">{label}</span>
        </label>
    );
}

export default RadioBlock;
