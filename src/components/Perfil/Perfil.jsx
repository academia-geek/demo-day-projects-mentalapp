import React from "react";
import { useSelector } from "react-redux";

const Perfil = () => {
  const usuario = useSelector((store) => store.user);

  return (
    <>
      <div className="prin-prof">
        <h1>Perfil</h1>
        <div className="main-prof">
          <div className="main-per">
            <img
              src="https://www.tekcrispy.com/wp-content/uploads/2018/10/avatar.png"
              alt="profile-image"
            />
            <h2>{usuario.name}</h2>
            <p>Descripción del perfil de la persona</p>
            <button>+</button>
          </div>
          <div className="main-data">
            <h2>Actividad</h2>
            <div className="sec-act">
              <img
                src="https://www.tekcrispy.com/wp-content/uploads/2018/10/avatar.png"
                alt="profile-image"
              />
              <h6>{usuario.name}</h6>
            </div>
            <img
              src="https://www.portafolio.co/files/article_content/uploads/2019/02/06/5c5b73a6960ab.jpeg"
              alt="profile-image"
            />
            <p>
              Hoy salí a pasear con mi perro como parte de mi rutina para la
              depresión, me siento mucho mejor!
            </p>
            <div className="sec-act">
              <img
                src="https://www.tekcrispy.com/wp-content/uploads/2018/10/avatar.png"
                alt="profile-image"
              />
              <h6>{usuario.name}</h6>
            </div>
            <img
              src="https://www.portafolio.co/files/article_content/uploads/2019/02/06/5c5b73a6960ab.jpeg"
              alt="profile-image"
            />
            <p>
              Hoy salí a pasear con mi perro como parte de mi rutina para la
              depresión, me siento mucho mejor!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
