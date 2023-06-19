import React from "react";
import "./Footer.css"
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";




export default function Footer () {
    return (
        <div className="footer-component">
            <div className="footer-text">
            Copyright © 2023 Dylan Sebastian Marcote. Todos los derechos reservados.
            </div>
            <div 
            className="icons-about">
                <BsLinkedin/>
                <div className="git"><BsGithub/></div>
            </div>
       </div>
        
    )
}
