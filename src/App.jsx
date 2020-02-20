import React from "react";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Acquainted from "./Acquainted/Acquainted";
import UserList from "./UsersList/UserList";
import FormRegister from "./FormRegister/FormRegister";

function App() {
    return (
        <>
            <Header />
            <Intro />
            <Acquainted />
            <UserList />
            <FormRegister />
        </>
    );
}

export default App;
