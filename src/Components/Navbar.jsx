import React, { useContext,useState } from 'react';
// import '../Stylesheet/Navbar.css';
import { NavContexts } from '../Context/NavContexts';
import styles from '../Stylesheet/Nav.module.css';
import Button from '../Components/Button';
import {AiOutlineBars} from 'react-icons/ai';
import {GiSplitCross} from 'react-icons/gi';


const Navbar = () => {
    const [togglebar,setTogglebar] = useState(true);
    const handleToggleBar = () => {
        setTogglebar(!togglebar);
        console.log("toggle:", togglebar);
    }

    const {activeLinkId} = useContext(NavContexts);
    console.log(activeLinkId);

    const navLinks = ["Home", "Contact","About"];

    const renderNavLinks = (content) =>{
        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClickNavigation = () =>{
            console.log(scrollToId);
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
            <nav>
                {navLinks.map(nav => renderNavLinks(nav))}
                <a>Extra</a>
            </nav>

            <div className={styles.togglebar}>
            {togglebar ? <AiOutlineBars onClick={handleToggleBar}/> : 
            <GiSplitCross onClick={handleToggleBar}/>}
            </div>


        </div>
    </div>
    </header>
  )
}

export default Navbar