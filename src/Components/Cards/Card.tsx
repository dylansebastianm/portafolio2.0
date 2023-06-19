import React from "react";
import "./Card.css"
import { BsGithub} from "react-icons/bs";


import foto1 from "./proyecto1.jpg";
/* import foto2 from "./proyecto2.jpg";
 */ 
 



export default function Card () {
    return (
        <div className="cards-tittle-proyects">
            <div className="tittles-body">Proyectos</div>
            <hr className="barrita-tittles"></hr>
            <div className="cards-containers">
            <div className="card-component">
            <img  
            className="img-card" 
            src={foto1}>              
            </img>
            <h4 className="tittle-card">Hery Game Store</h4>
            <div 
            className="info">
                Online store of digital video games for Play Station. 
                Users can register, buy with Mercado Pago and administrators can manage 
                the platform with a dashboard. 
            </div>
                <div className="skills-container">
                <div className="pastilla">React</div>
                <div className="pastilla">Express.js</div>
                <div className="pastilla">Auth0</div>
                <div className="pastilla">MercadoPago</div>               
            </div>
            <div className="skills-container">
                <div className="pastilla">OpenAI</div>
                <div className="pastilla">JavaScript</div>              
            </div>


            <div className="button-card-component">
                <a href="https://pf-front-y72g-git-develop-pfgrupo3henry.vercel.app/"><div className="button-cv-1">Resultado</div></a>
                <a href="https://github.com/pfgrupo3henry/pf_front"><div className="button-cv">Código fuente</div></a>
            </div>
            </div>
            <div className="card-component">
            <img  
            className="img-card" 
            src={foto1}>              
            </img>
            <h4 className="tittle-card">Credit Card Form</h4>
            <div 
            className="info">
                Controlled form for credit card payment gateway with dynamic 
                information such as brand and data of the same.
            </div>
                <div className="skills-container">
                <div className="pastilla">React</div>
                <div className="pastilla">Express.js</div>
                <div className="pastilla">Auth0</div>
                <div className="pastilla">MercadoPago</div>               
            </div>
            <div className="skills-container">
                <div className="pastilla">OpenAI</div>
                <div className="pastilla">JavaScript</div>              
            </div>


            <div className="button-card-component">
                <a href="https://credit-card-form-puce.vercel.app/"><div className="button-cv-1">Resultado</div></a>
                <a href="https://github.com/dylansebastianm/credit-card-form"></a><div className="button-cv">Código fuente</div>
            </div>
            </div>


            <div className="card-component">
            <img  
            className="img-card" 
            src={foto1}>              
            </img>
            <h4 className="tittle-card">List of tasks</h4>
            <div 
            className="info">
                Task list app made with React, Redux and LocalStorage. 
                Users can add, delete, and mark tasks as complete.
            </div>
                <div className="skills-container">
                <div className="pastilla">React</div>
                <div className="pastilla">Express.js</div>
                <div className="pastilla">Auth0</div>
                <div className="pastilla">MercadoPago</div>               
            </div>
            <div className="skills-container">
                <div className="pastilla">OpenAI</div>
                <div className="pastilla">JavaScript</div>              
            </div>


            <div className="button-card-component">
                <a href="https://todoapp-3-dylansebastianm.vercel.app/"> <div className="button-cv-1">Resultado</div></a>
                
                <a href="https://github.com/dylansebastianm/todoapp_3"><div className="button-cv">Código fuente</div></a>
            </div>
            </div>


          
        </div>
        </div>
       
        
        
    )
}
