import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCKFShe64hcEl4ErydIGF8CUCHn_TKWdpQ',
  authDomain: 'recipe-site-c62b7.firebaseapp.com',
  projectId: 'recipe-site-c62b7',
  storageBucket: 'recipe-site-c62b7.appspot.com',
  messagingSenderId: '1012018943453',
  appId: '1:1012018943453:web:08915db237cbf6cd9f5234',
  measurementId: 'G-3PN12RHXCR',
};

//initialie firebase

firebase.initializeApp(firebaseConfig);

//initialize services

const projectFirestore = firebase.firestore();

export { projectFirestore };
