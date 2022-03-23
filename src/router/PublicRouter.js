import { Navigate } from "react-router-dom";

export const PublicRouter = ({ isAuth, children }) => {
<<<<<<< HEAD
  return !isAuth ? children : <Navigate to="/inicio" />;
=======
   return !isAuth ? children : <Navigate to="/inicio" />;
>>>>>>> f69ba8319f33964b7533824119a681634e868492
};
