import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC2ST_R6Wg4klPRZ2lGTJbkm_WzuN1YtUw",
  authDomain: "netflix-clone-3b560.firebaseapp.com",
  projectId: "netflix-clone-3b560",
  storageBucket: "netflix-clone-3b560.appspot.com",
  messagingSenderId: "332628211352",
  appId: "1:332628211352:web:e2f037f2c95a118168c2ed",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// ✅ Login function (fixed missing bracket)
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// ✅ Logout function
const logout = () => {
  signOut(auth);
};

export { signup, logout, login, auth, db };
