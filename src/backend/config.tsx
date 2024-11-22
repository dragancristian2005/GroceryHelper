import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

require("dotenv").config();

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "test-project-b87d1.firebaseapp.com",
  databaseURL: "https://test-project-b87d1-default-rtdb.firebaseio.com",
  projectId: "test-project-b87d1",
  storageBucket: "test-project-b87d1.firebasestorage.app",
  messagingSenderId: "412085141637",
  appId: "1:412085141637:web:5f060563a0731a069ce9ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authen = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getDatabase(app);

export { authen };
