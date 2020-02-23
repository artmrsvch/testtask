export const validate = values => {
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
