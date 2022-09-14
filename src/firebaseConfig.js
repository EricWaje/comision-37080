import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCU6JXM6DAN5ebUOLOoQ18rQLvi3lPykvQ',
    authDomain: 'react-37080-profe.firebaseapp.com',
    projectId: 'react-37080-profe',
    storageBucket: 'react-37080-profe.appspot.com',
    messagingSenderId: '334358558901',
    appId: '1:334358558901:web:d4947fa00e72caede6e6fc',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
