import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCg4I1x53G1Kybwztdm1GcPBDEl6S8O3R0',
	authDomain: 'linkedin-dd713.firebaseapp.com',
	projectId: 'linkedin-dd713',
	storageBucket: 'linkedin-dd713.appspot.com',
	messagingSenderId: '486060508441',
	appId: '1:486060508441:web:ed7238853728e017b97188',
	measurementId: 'G-Q16DYCJQ0E',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
