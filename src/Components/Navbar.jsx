import React, { useContext,useState } from 'react';
// import '../Stylesheet/Navbar.css';
import { NavContexts } from '../Context/NavContexts';
import styles from '../Stylesheet/Nav.module.css';
import Button from '../Components/Button';
import {AiOutlineBars} from 'react-icons/ai';
import {GiSplitCross} from 'react-icons/gi';
import LE from '../assets/LE.png';


const Navbar = () => {
    const [togglebar,setTogglebar] = useState(false);
    const handleToggleBar = () => {
        setTogglebar(!togglebar);
        console.log("toggle:", togglebar);
    }

    const {activeLinkId} = useContext(NavContexts);
    console.log(activeLinkId);

    const navLinks = ["Home","About", "Contact","Projects"];

    const renderNavLinks = (content) =>{
        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClickNavigation = () =>{
            console.log(scrollToId);
            // setTogglebar(false);
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
        }

        return (
            <ul key={content}>
                <li>
                    {/* <a onClick={handleClickNavigation} >{content}</a> */}
                    <button onClick={handleClickNavigation}
                    className={activeLinkId === content ? styles.activeClass 
                        : ""}
                    >{content}</button>
                </li>
                
            </ul>
        )
    }
    //Redirect to homepage when logo is clicked
    const handlesubmit = () =>{
        const scrollToId = "homeSection";
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
    }

  return (
    <header className={styles.header}>
    <div className={styles.container}>
        <div className={styles.navContainer}>
            <h1 onClick={() => handlesubmit()}>Lesego</h1>
            {/* <img src={LE} /> */}
            {/* Togglebar */}
            <div className={styles.togglebar}>
            {togglebar ? (
                <GiSplitCross onClick={handleToggleBar}/>
                
                ):( 
                <AiOutlineBars onClick={handleToggleBar}/>
            
            )}
            </div>
            <nav className={`${styles.nav} ${togglebar ? styles.activeNav : ""}`}>
                {navLinks.map(nav => renderNavLinks(nav))}
               
                
            </nav>

           


        </div>
    </div>
    </header>
  )
}

export default Navbar