import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2ST_R6Wg4klPRZ2lGTJbkm_WzuN1YtUw",
  authDomain: "netflix-clone-3b560.firebaseapp.com",
  projectId: "netflix-clone-3b560",
  storageBucket: "netflix-clone-3b560.firebasestorage.app",
  messagingSenderId: "332628211352",
  appId: "1:332628211352:web:e2f037f2c95a118168c2ed",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, EmailAuthCredential, password) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      EmailAuthCredential,
      password
    );
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        alert(error)
    }
}

const logout =() => {
    signOut(auth);
}

export {signup, logout, login, auth, db};


