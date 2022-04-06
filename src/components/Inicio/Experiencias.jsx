import React from "react";
import { iconPersona } from "../../media/imagenes";

const Experiencias = () => {
   return (
      <section className="cont-exp">
         <h2>Experiencias de nuestros usuarios</h2>
         <div className="experiences">
            <div className="exp">
               <img
                  src={iconPersona}
                  alt="icono persona"
               />
               <h3>Felipe Rodriguez</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti ad
                  aliquam voluptatem qui consectetur aut ratione placeat dolorem laudantium cumque
                  dolorum quam, commodi, earum facilis mollitia saepe ut molestias!
               </p>
            </div>
            <div className="exp">
               <img
                  src={iconPersona}
                  alt="icono persona"
               />
               <h3>Camilo Garzón</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti ad
                  aliquam voluptatem qui consectetur aut ratione placeat dolorem laudantium cumque
                  dolorum quam, commodi, earum facilis mollitia saepe ut molestias!
               </p>
            </div>
            <div className="exp">
               <img
                  src={iconPersona}
                  alt="icono persona"
               />
               <h3>Cristian Sandoval</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti ad
                  aliquam voluptatem qui consectetur aut ratione placeat dolorem laudantium cumque
                  dolorum quam, commodi, earum facilis mollitia saepe ut molestias!
               </p>
            </div>
         </div>
      </section>
   );
};

export default Experiencias;
