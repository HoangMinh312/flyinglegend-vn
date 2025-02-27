import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function saveArticle(article) {
    try {
        const user = auth.currentUser;
        if (user) {
            const docRef = await addDoc(collection(db, "articles"), {
                ...article,
                authorId: user.uid,
                createdAt: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
        } else {
            console.log("No user is signed in.");
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default saveArticle;