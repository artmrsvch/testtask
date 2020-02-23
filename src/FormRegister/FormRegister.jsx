import React, { useEffect, useState } from "react";
import RadioBlock from "./RadiobuttonsBlock";
import InputBlock from "./InputBlock";
import FileInp from "./FileLoader";
import Modal from "../Modal/Modal";
import { validate } from "./validate";
import { useDispatch, useSelector } from "react-redux";
import { positionRequest, fetchRegisterRequest, getTokenRequst } from "../modules/actions";
import { Form, Field } from "react-final-form";

function FormRegister() {
    const [state, setState] = useState({ file: null });
    const dispatch = useDispatch();
    const { positions, token, isLoggedIn } = useSelector(stateSelect => stateSelect);

    const loadFile = file => setState({ ...state, file });
    const validateInputs = values => validate(values);

    const submit = ({ name, email, phone, position_id }) => {
        const formData = new FormData();
        formData.append("position_id", position_id);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", `+${phone}`);
        formData.append("photo", state.file);

        dispatch(fetchRegisterRequest({ formData, token }));
    };

    useEffect(() => {
        dispatch(positionRequest());
        dispatch(getTokenRequst());
    }, []);
    return (
        <section className="section form-section">
            <div className="container form-container">
                <h2 className="title form-title">Register to get a work</h2>
                <Form
                    onSubmit={submit}
                    validate={validateInputs}
                    render={({ handleSubmit, invalid }) => (
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="main-fields">
                                <Field
                                    component={InputBlock}
                                    label="Name"
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                />
                                <Field
                                    component={InputBlock}
                                    label="Email"
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                />
                                <Field
                                    component={InputBlock}
                                    label="Phone number"
                                    type="number"
                                    name="phone"
                                    placeholder="+380 XX XXX XX XX"
                                />
                            </div>
                            <div className="select-position">
                                <label className="select-position__headline">
                                    Select your position
                                </label>
                                {positions.map(({ id, name }) => (
                                    <Field
                                        key={id}
                                        component={RadioBlock}
                                        type="radio"
                                        name="position_id"
                                        value={`${id}`}
                                        label={name}
                                    />
                                ))}
                            </div>
                            <div className="upload-photo">
                                <label className="upload-photo__label">Photo</label>
                                <Field
                                    loadFile={loadFile}
                                    component={FileInp}
                                    type="file"
                                    name="photo"
                                    accept="image/jpeg, image/jpg"
                                />
                            </div>
                            <div className="btn-wrap">
                                <button type="submit" disabled={invalid} className="btn">
                                    {invalid ? "Fill all fields" : "Sign up now"}
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>
            {isLoggedIn && <Modal />}
        </section>
    );
}

export default FormRegister;
