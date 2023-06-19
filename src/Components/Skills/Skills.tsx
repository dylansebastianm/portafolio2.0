import React from "react";
import "./Skills.css"
import { SiJavascript, SiGithub, SiReact, SiHtml5, SiBootstrap, SiRedux,
    SiNodedotjs, SiPostgresql, SiSequelize, SiExpress, SiPostman, SiNpm,
    SiAuth0, SiMercadopago, SiTypescript, SiPython
} from "react-icons/si";





export default function Skills () {
    return (
        <div className="skills-component">
            <div className="tittles-body">Habilidades</div>
            <hr className="barrita-tittles"></hr>
            
            <div id="proyects" className="skills-container2">
            <div>
                <div className="skills"><SiJavascript /></div>
                <p className="skill-name">JavaScript</p>
            </div>

            <div>
                <div className="skills"><SiGithub /></div>
                <p className="skill-name">GitHub</p>
            </div>

            <div>
                <div className="skills"><SiReact /></div>
                <p className="skill-name">React.js</p>
            </div>
            
            <div>
                <div className="skills"><SiHtml5 /></div>
                <p className="skill-name">HTML</p>   
            </div>
            
            
            <div>
            <div className="skills"><SiBootstrap /></div>
            <p className="skill-name">Bootstrap</p>   
            </div>
            
            
            <div>
            <div className="skills"><SiRedux /></div>
            <p className="skill-name">Redux</p>   
            </div>
            
            
            <div>
            <div className="skills"><SiNodedotjs /></div>
            <p className="skill-name">Node.js</p>    
            </div>
            
            
            <div>
                <div className="skills"><SiPostgresql /></div>
                <p className="skill-name">PostgreSQL</p>
            </div>    
            
            
            <div>
            <div className="skills"><SiSequelize /></div>
            <p className="skill-name">Sequelize</p>
            </div>   
            
            
            <div>
            <div className="skills"><SiExpress /> </div>
            <p className="skill-name">Express</p>
            </div>    
           
            
            <div>
            <div className="skills"><SiMercadopago /></div>
            <p className="skill-name">Mercado Pago</p>
            </div>   
            
            
            <div>
            <div className="skills"><SiPostman /></div>
            <p className="skill-name">Postman</p>
            </div>    
            
            
            <div>
            <div className="skills"><SiNpm /></div>
            <p className="skill-name">NPM</p>
            </div>   
            
            
            {/* <div>
            <div className="skills"><AiOutlineAntDesign /></div>
              <p className="skill-name">Ant Design</p>
            </div> */}    
           
          
            <div>
            <div className="skills"><SiAuth0 /></div>
            <p className="skill-name">Auth0</p>
            </div>   
            
            
            <div>
            <div className="skills"><SiTypescript /></div>
            <p className="skill-name">TypeScript</p>
            </div>   
            

            </div>

       </div>
        
    )
}


