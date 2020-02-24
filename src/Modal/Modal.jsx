import React from "react";
import { useDispatch } from "react-redux";
import { cleanModal } from "../modules/actions";

function Modal() {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(cleanModal());
    };

    return (
        <div className="modal">
            <div className="modal-container">
                <h1 className="modal__title">Congratulations</h1>
                <span className="modal__text">You have successfully passed the registration</span>
                <div className="btn-wrap btn-wrap_modal">
                    <button onClick={closeModal} type="button" className="btn btn_modal">
                        Great
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
