import { types } from "../types/types";
import {
   getAuth,
   signInWithPopup,
   signInWithEmailAndPassword,
   signOut,
   createUserWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";
import { google, facebook } from "../../firebase/firebaseConfig";

export const loginEmailPassword = (email, password) => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            dispatch(loginSincrono(user.uid, user.displayName, email));
            console.log("Bienvenid@");
         })
         .catch((e) => {
            console.log("El usuario no existe");
            console.log(e);
         });
   };
};

export const loginGoogle = () => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, google)
         .then(({ user }) => {
            dispatch(loginSincrono(user.uid, user.displayName, user.email));
            console.log(`Bienvenid@ ${user.displayName}`);
         })
         .catch((e) => {
            console.log(e);
         });
   };
};

export const loginFacebook = () => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
         .then(({ user }) => {
            dispatch(loginSincrono(user.uid, user.displayName, user.email));
            console.log(`Bienvenid@ ${user.displayName}`);
         })
         .catch((e) => {
            console.log(e);
         });
   };
};

export const loginSincrono = (id, displayname, email) => {
   return {
      type: types.login,
      payload: {
         id,
         displayname,
         email
      },
   };
};

// Logout

export const logoutAsync = () => {
   return (dispatch) => {
      const auth = getAuth();
      signOut(auth)
         .then(() => {
            dispatch(logoutSincrono());
         })
         .catch((error) => {
            console.log(error);
         });
   };
};

export const logoutSincrono = () => {
   return {
      type: types.logout,
   };
};

export const registroEmailPasswordNombre = (email, password, name) => {
   return (dispatch) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(async ({ user }) => {
            await updateProfile(auth.currentUser, { displayName: name });

            dispatch(registroSync(user.email, user.uid, user.displayName));
            dispatch(loginSincrono(user.uid, user.displayName, email));
         })
         .catch((e) => {
            console.log(e);
         });
   };
};

export const registroSync = (email, id, name) => {
   return {
      type: types.register,
      payload: {
         id,
         email,
         name
      },
   };
};

// Usuario sin registro

export const registroDefault = () => {
   return {
      type: types.user,
      payload: {
         id: "user"
      }
   }
}