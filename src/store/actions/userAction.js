import {
  loginStart,
  loginSuccess,
  loginFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} from "../slices/userSlice";

import { auth, db } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

export const signInUser = (data, navigate) => async (dispatch) => {
  dispatch(loginStart());
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user);
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        dispatch(registerSuccess(docSnap.data()));
        localStorage.setItem("UserToken", JSON.stringify(docSnap.data()));
        navigate("/");
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const updateUser = (data, toast, navigate) => async (dispatch) => {
  dispatch(updateUserStart());
};

export const signUpUser = (data, navigate) => async (dispatch) => {
  dispatch(registerStart());
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("check user: ", user);

      setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      })
        .then(async (res) => {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            dispatch(registerSuccess(docSnap.data()));
            localStorage.setItem("UserToken", JSON.stringify(docSnap.data()));
            navigate("/");
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("set doc error: ", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
