importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyDsC1tR4wZ3byOkVrCUYF0mfKTjU4BPBTA",
    authDomain: "angular-7ac19.firebaseapp.com",
    projectId: "angular-7ac19",
    storageBucket: "angular-7ac19.appspot.com",
    messagingSenderId: "963144178352",
    appId: "1:963144178352:web:dd548637e8a45fba723975",
    vapidKey: "BLqFX4w6B49qlT0hamToWvA8EBvor3drdrUknn-PVjaT2uNrBFdVTQVRmNiDaFYYe7JjofmmjGVPAGldK_PZY-4"
});
const messaging = firebase.messaging();