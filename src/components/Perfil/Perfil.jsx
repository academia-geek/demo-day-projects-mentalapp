import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileUpload } from "../../helpers/fileUpload";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  addPostAsync,
  deletePostAsync,
  listPostAsync,
} from "../../redux/actions/actionPerfil";

const Perfil = () => {
  const usuario = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // Cargar los posts

  useEffect(() => {
    dispatch(listPostAsync());
  }, [dispatch]);

  const publicacion = useSelector((state) => state.publicaciones.publicaciones);

  // Hacer nuevo post

  const formik = useFormik({
    initialValues: {
      descripcion: "",
      url: "",
    },
    validationSchema: Yup.object({
      descripcion: Yup.string().required(),
      url: Yup.string().required(),
    }),
    onSubmit: (data) => {
      dispatch(addPostAsync(data));
    },
  });

  // Subir imagen

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        formik.initialValues.url = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
          </div>
          <div className="main-data">
            <h2>Actividad</h2>
            {publicacion.map((p) => (
              <>
                <div className="sec-act">
                  <img
                    src="https://www.tekcrispy.com/wp-content/uploads/2018/10/avatar.png"
                    alt="profile-image"
                  />
                  <h6>{usuario.name}</h6>
                  <button
                    onClick={() => dispatch(deletePostAsync(p.descripcion))}
                  >
                    Borrar
                  </button>
                </div>
                <img src={p.url} alt="post" />
                <p>{p.descripcion}</p>
              </>
            ))}
          </div>
          <div className="new-post">
            <h2>Agregar una nueva historia</h2>
            <p>
              En esta sección podrás guardar tu progreso, compartir tus
              sentimientos e ideas.
            </p>
            <input
              id="fileSelector"
              type="file"
              autoComplete="off"
              className="form-control "
              placeholder="url image"
              style={{ display: "none" }}
              name="url"
              onChange={handleFileChanged}
              required
            />
            <button type="button" onClick={handlePictureClick}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5625 17.4375H17.4375V0.5625H0.5625V17.4375ZM16.1875 12.5993L11.837 8.24879L13.6573 6.42848L16.1875 8.9584V12.5993ZM1.8125 1.8125H16.1875V7.19062L13.6575 4.66055L10.9531 7.36492L7.04688 3.45867L1.8125 8.69305V1.8125ZM1.8125 10.4609L7.04688 5.22656L16.1875 14.3672V16.1875H1.8125V10.4609Z"
                  fill="white"
                />
              </svg>
            </button>
            <form onSubmit={formik.handleSubmit}>
              <img src="" alt="" />
              <textarea
                name="descripcion"
                rows="5"
                cols="40"
                placeholder="Escribe aquí"
                onChange={formik.handleChange}
                required
              ></textarea>
              <button className="btnSubmit" type="submit">
                +
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
