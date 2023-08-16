import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlXn9OpxzKRgksBCcmN875G8oHfLp1QIc",
  authDomain: "fir-e3c8e.firebaseapp.com",
  projectId: "fir-e3c8e",
  storageBucket: "fir-e3c8e.appspot.com",
  messagingSenderId: "337434861615",
  appId: "1:337434861615:web:0bffb727454b35f44526da"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
