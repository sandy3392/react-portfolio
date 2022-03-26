import React, {useState} from "react";
import Nav from '../Nav';
import About from '../About';
import Profile from '../Profile';
import ContactForm from '../Contact';

function Headerhome(){

    return (
        <div>
            <Nav
            ></Nav>
            <About></About>
            <Profile></Profile>
            <ContactForm></ContactForm>
        </div>
    );
}

export default Headerhome;