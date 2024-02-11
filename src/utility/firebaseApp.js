import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
//ez a 3 referencia, adat, kép, szolgáltatás

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)      //adatokat kimentjük
export const storage = getStorage(app)   //képeket is
export const auth = getAuth(app)        //szogáltatást is

