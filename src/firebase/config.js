import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCknsJ4VMygFAobZRK1V9zbKOkojhdhKAw",
    authDomain: "projectolx-2ae82.firebaseapp.com",
    projectId: "projectolx-2ae82",
    storageBucket: "projectolx-2ae82.appspot.com",
    messagingSenderId: "812939456202",
    appId: "1:812939456202:web:3d53f2f331bc37c1e08e33",
    measurementId: "G-RDW7LKPZ42"
  };

  export default firebase.initializeApp(firebaseConfig)
  