// 파이어베이스 초기화를 위한 컴포넌트
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLazpX6suB4gJG2pycMfSc3RN9rJxMIbI",
  authDomain: "twitter-reload-ed688.firebaseapp.com",
  projectId: "twitter-reload-ed688",
  storageBucket: "twitter-reload-ed688.firebasestorage.app",
  messagingSenderId: "278334747731",
  appId: "1:278334747731:web:2c263811daf8f885c802a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
