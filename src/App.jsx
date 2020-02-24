import React from "react";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Acquainted from "./Acquainted/Acquainted";
import UserList from "./UsersList/UserList";
import Errors from "./Modal/Errors";
import FormRegister from "./FormRegister/FormRegister";
import { useSelector } from "react-redux";

function App() {
    const { errors } = useSelector(stateSelect => stateSelect);
    return (
        <>
            {errors && <Errors error={errors} />}
            <Header />
            <Intro />
            <Acquainted />
            <UserList />
            <FormRegister />
        </>
    );
}

export default App;
