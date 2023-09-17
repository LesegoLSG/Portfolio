import React from 'react';
import '../Stylesheet/Navbar.css';



const Navbar = () => {
    const navLinks = ["Home", "About", "Contact"];

    const renderNavLinks = (content) =>{
        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClickNavigation = () =>{
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
        }

        return (
            <ul key={content}>
                <li>
                    <a onClick={handleClickNavigation} >{content}</a>
                </li>
            </ul>
        )
    }

  return (
    <header>
    <div className="container">
        <div className="navContainer">
            <h1>Lesego</h1>
            <nav>
                {navLinks.map(nav => renderNavLinks(nav))}
            </nav>
            <button>Download Resume</button>
        </div>
    </div>
    </header>
  )
}

export default Navbar