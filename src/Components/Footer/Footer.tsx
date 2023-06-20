import React from "react";
import "./Footer.css"
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import {SiGmail} from "react-icons/si"





export default function Footer () {
    return (
        <div className="footer-component">
            <div className="footer-text">
            Copyright © 2023 Dylan Sebastian Marcote. Todos los derechos reservados.
            </div>
            <div 
            className="icons-about">
                <a href="https://www.linkedin.com/in/dylan-sebastian-03706316b/" className="icons-redes"><BsLinkedin/></a>
                <a href="https://github.com/dylansebastianm?tab=repositories"><div className="git icons-redes"><BsGithub/></div></a>
                <a href="https://mail.google.com/mail/?view=cm&to=dyla.sebastianmte@gmail.com" target="_blank" className="icons-redes"><SiGmail/></a>


            </div>
       </div>
        
    )
}
