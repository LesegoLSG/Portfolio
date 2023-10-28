import React, { useContext,useEffect,useState } from 'react';
// import '../Stylesheet/Navbar.css';
import { NavContexts } from '../Context/NavContexts';
import styles from '../Stylesheet/Nav.module.css';
import Button from '../Components/Button';
import {AiOutlineBars} from 'react-icons/ai';
import {MdOutlineCancel} from 'react-icons/md';

//Icons for navbar links
import {IoIosHome} from 'react-icons/io';
import {BiSolidContact} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc';
import {GoProjectSymlink} from 'react-icons/go';

import LogoMakr from '../assets/LogoMakr.png';
import Logo2 from '../assets/Logo2.png';


const Navbar = () => {
    const [togglebar,setTogglebar] = useState(false);

    
    //Event listener to track window width changes
    useEffect(() =>{
        const handleResize = () =>{
            if(window.innerWidth >=768){
                setTogglebar(true);
            }else{
                setTogglebar(false);
            }
        };

        //Initial call to set the initial state
        handleResize();

        window.addEventListener('resize', handleResize);

        return () =>window.removeEventListener('resize', handleResize);
    },[]);

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
             setTogglebar(false);
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
            setTogglebar(true);
        }

        //Switch statement to return nav icons
        const iconComponent = () => {
            switch (content) {
                case "Home":
                    return <IoIosHome />;
                case "About":
                    return <FcAbout />;
                case "Contact":
                    return <BiSolidContact />;
                case "Projects":
                    return <GoProjectSymlink />;
                default:
                    return null;
            }
        };

        return (
            <ul key={content}>
                <li>
                    {/* <a onClick={handleClickNavigation} >{content}</a> */}
                    <button onClick={handleClickNavigation}
                    className={activeLinkId === content ? styles.activeClass 
                        : ""}
                    >
                        {iconComponent}
                        {content}</button>
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
        <div className={styles.navContainer} >
            {/* <h1 onClick={() => handlesubmit()}>{LogoMakr}</h1> */}
            <img onClick={() => handlesubmit()} src={LogoMakr} />
            {/* Togglebar */}
            <div className={styles.togglebar}>
            {togglebar ? (
                <MdOutlineCancel onClick={handleToggleBar}/>
                
                ):( 
                <AiOutlineBars onClick={handleToggleBar}/>
            
            )}
            </div>
            
                    {/* mobile */}
            {togglebar &&
            <nav className={ styles.nav}>
                {navLinks.map(nav => renderNavLinks(nav))}
                
            </nav>
           
            }

           
        
        
           


        </div>
    </div>
    </header>
  )
}

export default Navbar