// src/auth.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// REACT_APP_FIREBASE_APIKEY=AIzaSyDfS2UmAX9bjUiAaclkvW6EtCEuouw_3GQ
// REACT_APP_FIREBASE_AUTHDOMAIN=deniseburgues-f1924.firebaseapp.com
// REACT_APP_FIREBASE_PROJECTID=deniseburgues-f1924
// REACT_APP_FIREBASE_STORAGEBUCKET=deniseburgues-f1924.firebasestorage.app
// REACT_APP_FIREBASE_MESSAGINGSENDERID=496563358695
// REACT_APP_FIREBASE_APPID=1:496563358695:web:5f2b65d5fdd24e05f2cb42
// REACT_APP_FIREBASE_MEASUREMENTID=G-5H9M3SWS6N

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login automático com usuário fixo
export const loginUnico = async () => {
  const email = process.env.REACT_APP_FIREBASE_EMAIL; // conta fixa
  const senha = process.env.REACT_APP_FIREBASE_SENHA;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    // alert("Logado com sucesso!");
  } catch (error) {
    // alert("Erro no login:", error);
  }
};
