import React from "react";
import { Form, Field } from "react-final-form";

function FormRegister() {
    const submit = obj => {
        console.log(obj);
    };
    const InputBlock = ({ input, label, placeholder, meta }) => {
        return (
            <>
                <label className="main-fields__label">{label}</label>
                <input className="main-fields__inp" placeholder={placeholder} {...input} />
                {meta.error && meta.visited && !meta.active && (
                    <div style={{ fontSize: "12px", color: "red" }}>{meta.error}</div>
                )}
            </>
        );
    };
    const RadioBlock = ({ input, label }) => {
        return (
            <label className="select-position__label">
                <input {...input} className="select-position__radio" />
                <span class="radio-style"></span>
                <span className="select-position__radio-descript">{label}</span>
            </label>
        );
    };
    const FileInp = ({ input }) => {
        return (
            <div class="field__wrapper">
                <input {...input} className="field field__file" id="input__file" />
                <label className="field__file-wrapper" for="input__file">
                    <div className="field__file-fake">Upload your photo</div>
                    <div className="field__file-button">Browse</div>
                </label>
            </div>
        );
    };
    return (
        <section className="section form-section">
            <div className="container form-container">
                <h2 className="title form-title">Register to get a work</h2>
                <Form
                    onSubmit={submit}
                    render={({ handleSubmit }) => (
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
                                    type="phone"
                                    name="phone"
                                    placeholder="+380 XX XXX XX XX"
                                />
                            </div>
                            <div className="select-position">
                                <label className="select-position__headline">
                                    Select your position
                                </label>
                                <Field
                                    component={RadioBlock}
                                    type="radio"
                                    name="position_id"
                                    value="1"
                                    label="Frontend developer"
                                />
                                <Field
                                    component={RadioBlock}
                                    type="radio"
                                    name="position_id"
                                    value="2"
                                    label="Backend developer"
                                />
                                <Field
                                    component={RadioBlock}
                                    type="radio"
                                    name="position_id"
                                    value="3"
                                    label="Designer"
                                />
                                <Field
                                    component={RadioBlock}
                                    type="radio"
                                    name="position_id"
                                    value="4"
                                    label="QA"
                                />
                            </div>
                            <div className="upload-photo">
                                <label className="upload-photo__label">Photo</label>
                                <Field component={FileInp} type="file" name="file" />
                            </div>

                            <div className="btn-wrap">
                                <button className="btn">Sign up now</button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </section>
    );
}

export default FormRegister;
/* 
<label class="radio-label">
    <input type="radio" name="rbt" class="form-radiobutton">
    <span class="radio-style"></span>
    <span class="radio-text">Потребуется сдача</span>
</label>*/
