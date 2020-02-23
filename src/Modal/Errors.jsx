import React from "react";
import { useDispatch } from "react-redux";
import { resetErrors } from "../modules/actions";

function Errors({ error }) {
    const dispatch = useDispatch();
    const closeError = () => {
        dispatch(resetErrors());
    };
    const viewValidationError = fails => {
        let arrErrors = [];
        const { email, photo, user_id } = fails; //потому, что остальные ошибки отловит форма
        email && arrErrors.push(email[0]);
        photo && arrErrors.push(photo[0]);
        user_id && arrErrors.push(user_id[0]);
        return arrErrors.map(message => (
            <span className="modal__text modal__text_error">{message}</span>
        ));
    };
    return (
        <div className="modal">
            <div className="modal-container">
                <h1 className="modal__title">Error</h1>
                <span className="modal__text">{error.message}</span>
                {error.fails && viewValidationError(error.fails)}
                <div className="btn-wrap btn-wrap_error">
                    <button onClick={closeError} type="button" className="btn">
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Errors;
