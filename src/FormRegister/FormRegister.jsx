import React, { useEffect, useState } from "react";
import RadioBlock from "./RadiobuttonsBlock";
import InputBlock from "./InputBlock";
import FileInp from "./FileLoader";
import { useDispatch, useSelector } from "react-redux";
import { positionRequest, fetchRegisterRequest, getTokenRequst } from "../modules/actions";
import { Form, Field } from "react-final-form";

function FormRegister() {
    const [state, setState] = useState();
    const dispatch = useDispatch();
    const { positions, token } = useSelector(stateSelect => stateSelect);

    const loadFile = file => setState(file);
    const submit = ({ name, email, phone, position_id }) => {
        const formData = new FormData();
        formData.append("position_id", position_id);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", `+${phone}`);
        formData.append("photo", state);

        dispatch(fetchRegisterRequest({ formData, token }));
    };
    const validateInputs = values => {
        const errors = {};
        if (!values.name) errors.name = "Name is requaired";
        if (!values.email) errors.email = "Email is requaired";
        if (!values.phone) errors.phone = "Phone is requaired";
        if (!values.position_id) errors.position_id = "Position is requaired";
        if (!values.photo) errors.photo = "Photo is requaired";
        if (values.phone) {
            const regExp = /^[\+]{0,1}380([0-9]{9})$/;
            const bool = regExp.test(values.phone);
            if (!bool) errors.phone = "The number must correspond to 380XXXXXXX";
        }
        if (values.name) {
            if (values.name.length < 2 || values.name.length > 60) {
                errors.name = "Username should contain 2-60 characters";
            }
        }
        if (values.email) {
            const regExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
            const bool = regExp.test(values.email);
            if (!bool) errors.email = "The email must be a valid email address.";
        }

        return errors;
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
                                    accept="image/*"
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
        </section>
    );
}

export default FormRegister;
