import React from "react";
import CommentIcon from "@mui/icons-material/Comment";

const Foro = () => {
   return (
      <div className="cont--foro">
         <div className="foro--titulo">
            <h1>Ansiedad</h1>
            <span>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet
               blanditiis repellat, nostrum ut adipisci.
            </span>
         </div>

         <div className="foro">
            <h3>Últimos temas de conversación</h3>

            <div className="foro--cards">
               <div className="card">
                  <div className="card--info">
                     <h2>Lorem ipsum</h2>
                     <span>
                        Escrito por: <b>Anónimo</b>
                     </span>
                     <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quibusdam
                        tenetur voluptatem
                     </p>
                  </div>
                  <div className="card--comment">
                     <CommentIcon />
                     <span>10 comentarios</span>
                  </div>
               </div>
               <div className="card">
                  <div className="card--info">
                     <h2>Lorem ipsum</h2>
                     <span>
                        Escrito por: <b>Anónimo</b>
                     </span>
                     <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quibusdam
                        tenetur voluptatem
                     </p>
                  </div>
                  <div className="card--comment">
                     <CommentIcon />
                     <span>10 comentarios</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Foro;
