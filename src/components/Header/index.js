import React, {useState} from "react";
import Nav from '../Nav';
import About from '../About';
import Profile from '../Profile';
import ContactForm from '../Contact';

function Headerhome(){
    const [currentModule, setcurrentModule] = useState("About");
    return (
        <div>
            <Nav
            currentModule = {currentModule}
            setcurrentModule = {setcurrentModule}
            ></Nav>
            {currentModule === "About" && <About></About>}
            {currentModule === "Profile" && <Profile></Profile>}
            {currentModule === "ContactForm" && <ContactForm></ContactForm>}
        </div>
    );
}

export default Headerhome;