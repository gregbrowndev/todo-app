import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: put this in a .env file
const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);

isSupported().then((isSupported) => {
    if (isSupported) {
        console.log("Firebase Analytics is supported");
        const analytics = getAnalytics(app);
        // Use analytics.
    }
})

export const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099");