import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8m3jzdIFOYhZm9mKar7AlvpkV75osiAg",
  authDomain: "netflix-4bda2.firebaseapp.com",
  projectId: "netflix-4bda2",
  storageBucket: "netflix-4bda2.appspot.com",
  messagingSenderId: "756725093245",
  appId: "1:756725093245:web:f9c645d599d5c92cb17214"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
