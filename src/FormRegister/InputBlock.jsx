import React from "react";

function InputBlock({ input, label, placeholder, meta }) {
    return (
        <>
            <label className="main-fields__label">{label}</label>
            <input className="main-fields__inp" {...input} placeholder={placeholder} required />
            {meta.error && meta.visited && !meta.active && (
                <div style={{ fontSize: "12px", width: "100%", color: "red" }}>{meta.error}</div>
            )}
        </>
    );
}

export default InputBlock;
