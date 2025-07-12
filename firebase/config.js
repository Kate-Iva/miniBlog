import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDBIE_925C6O2DIVBSkMaTviTFg7-_SCxI",
  authDomain: "miniblog-3acef.firebaseapp.com",
  projectId: "miniblog-3acef",
  storageBucket: "miniblog-3acef.firebasestorage.app",
  messagingSenderId: "477872224488",
  appId: "1:477872224488:web:a3ba3a44585cd709cc715d"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };