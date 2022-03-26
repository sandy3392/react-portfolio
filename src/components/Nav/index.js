import React from "react";

function Nav(props){

    const {
        contactSelected,
        setContactSelected
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
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className= "mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              Projects
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
    );
}

export default Nav;