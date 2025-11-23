
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnFnWRnjyjoCxVCq0B6Znh5H93phdn9Dc",
  authDomain: "prodexa-24718.firebaseapp.com",
  projectId: "prodexa-24718",
  storageBucket: "prodexa-24718.firebasestorage.app",
  messagingSenderId: "555601107634",
  appId: "1:555601107634:web:830baaa2e9cf61200047ab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
