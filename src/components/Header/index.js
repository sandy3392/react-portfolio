import React, {useState} from "react";
import Nav from '../Nav';
import About from '../About';
import Profile from '../Profile';
import ContactForm from '../Contact';

function Headerhome(){
    const [contactSelected, setContactSelected] = useState(false);
    return (
        <div>
             <About></About>
             <ContactForm></ContactForm>
        </div>
    );
}

export default Headerhome;