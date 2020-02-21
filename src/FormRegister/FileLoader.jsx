import React, { useState } from "react";

function FileInp({ input, loadFile, accept, meta }) {
    const [state, setState] = useState({ name: null, visited: false, error: null });

    const changedFile = e => {
        if (e.target.files[0]) {
            if (e.target.files[0].size > 5242880) {
                //валидируем размер на фронте
                setState({ ...state, error: "The photo may not be greater than 5 Mbytes." });
            } else if (e.target.files[0].size < 22500) {
                setState({ ...state, error: "Minimum size of photo 70x70px." });
            } else {
                setState({ ...state, error: null, name: e.target.files[0].name }); // вывод имени в поле кастомного инпута
                input.onChange(e); // запускаем нативное событие react-final-form
                loadFile(e.target.files[0]); //отправляем файл в стейт формыы
            }
        }
    };
    const saveVisit = () => {
        !state.visited && setState({ ...state, visited: true }); //валидируем костылем посещение инпута
    };
    return (
        <div className="field__wrapper">
            <input
                accept={accept}
                {...input}
                className="field field__file"
                id="input__file"
                onChange={changedFile}
                onClick={saveVisit}
            />
            <label className="field__file-wrapper" htmlFor="input__file">
                <div style={state.name && { color: "black" }} className="field__file-fake">
                    {state.name ? state.name : "Upload your photo"}
                </div>
                <div className="field__file-button">Browse</div>
            </label>
            {(meta.error || state.error) && state.visited ? (
                <div style={{ textAlign: "left", fontSize: "12px", width: "100%", color: "red" }}>
                    {state.error || meta.error}
                </div>
            ) : null}
        </div>
    );
}

export default FileInp;
