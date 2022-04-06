import React from "react";
import { iconPersona } from "../../media/imagenes";

const Experiencias = () => {
   return (
      <section className="cont-exp">
         <h2 style={{ textAlign: "center" }}>Experiencias de nuestros usuarios</h2>
         <div className="experiences">
            <div className="exp">
               <img src={iconPersona} alt="icono persona" />
               <h3>Felipe Rodriguez</h3>
               <p>
                  MentalApp me ha ayudado mucho en vida ya que he tenido la oportunidad de
                  interactuar con otras personas que sufren las mismas dificultades que yo y desde
                  que uso la aplicación he aprendido tips muy importantes para el cuidado de mi
                  salud y bienestar emocional.
               </p>
            </div>
            <div className="exp">
               <img src={iconPersona} alt="icono persona" />
               <h3>Camilo Garzón</h3>
               <p>
                  Soy bastante exigente con las aplicaciones que uso. Normalmente, encuentro
                  bastante fricción a la hora de usarlas de forma continua y me acaban dejando de
                  interesar, pero MentalApp es la excepción. Nada más empezar a usarla ya se nota la
                  calidad de lo que ofrece y cómo se ajusta a tu personalidad.
               </p>
            </div>
            <div className="exp">
               <img src={iconPersona} alt="icono persona" />
               <h3>Cristian Sandoval</h3>
               <p>
                  Desde hace algunos meses he pasado por situaciones personales difíciles que me han
                  tenido sintiendo mal emocionalmente. MentalApp me ha ayudado a lidiar y
                  exteriorizar mis emociones y ha sido el apoyo que me ha costado encontrar en mi
                  círculo cercano.
               </p>
            </div>
         </div>
      </section>
   );
};

export default Experiencias;
