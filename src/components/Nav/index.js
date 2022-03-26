import React from "react";

function Nav(props){

    const {
        currentModule,
        setcurrentModule
      } = props;

    return (
    <header className="flex-row px-1 space-between">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="Sandeep"> </span> Sandeep Vittala
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className= "mx-2">
            <a data-testid="about" href="#about" onClick={() => setcurrentModule("About")}>
              About me
            </a>
          </li>
          <li className= "mx-2">
            <a data-testid="projects" href="#projects" onClick={() => setcurrentModule("Profile")}>
              Projects
            </a>
          </li>
          <li className={`mx-2`}>
          <span onClick={() => setcurrentModule("ContactForm")}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
    );
}

export default Nav;