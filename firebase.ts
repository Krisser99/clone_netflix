// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAXbckr43DDDuQz0B4cEtK0Yz4l85t37FI',
    authDomain: 'netflix-clone-3ff2a.firebaseapp.com',
    projectId: 'netflix-clone-3ff2a',
    storageBucket: 'netflix-clone-3ff2a.appspot.com',
    messagingSenderId: '292197791568',
    appId: '1:292197791568:web:938d594430c7baf38d1e55',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()


export default app
export { db, auth}
