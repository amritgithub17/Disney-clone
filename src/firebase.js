import { initializeApp } from "firebase/app";
// import firebase from "firebase"
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC8CyPIjiPu5UXamdqgpVUFagexmWwTYQg",
    authDomain: "disneyplus-clone-2bd1d.firebaseapp.com",
    projectId: "disneyplus-clone-2bd1d",
    storageBucket: "disneyplus-clone-2bd1d.appspot.com",
    messagingSenderId: "36975601500",
    appId: "1:36975601500:web:95c835b290672362e6c399",
    measurementId: "G-QZ0TLNWDB4"
  };

  
const firebaseApp = initializeApp(firebaseConfig);
// const db=firebaseApp.firestore();
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();
// const storage=firebase.storage();

export {auth , provider };
// export default db;
