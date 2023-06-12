import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
const app = firebase.initializeApp({
    apiKey: "AIzaSyCm8G2mbewFRfOFQCzFVx92cjh3HZ4plh4",
    authDomain: "chat-app-756de.firebaseapp.com",
    projectId: "chat-app-756de",
    storageBucket: "chat-app-756de.appspot.com",
    messagingSenderId: "626099519088",
    appId: "1:626099519088:web:5c52b574099d35ca3bbeb5"

  })
  
  // Initialize Firebase
export const storage = getStorage(app)
export const auth = app.auth()
export const db = getFirestore(app)
export default app