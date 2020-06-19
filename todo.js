var firebaseConfig = {
    apiKey: "AIzaSyBMsTF89xBSueLmOLk6me47J9h-CmGhSnE",
    authDomain: "todo-4cdf1.firebaseapp.com",
    databaseURL: "https://todo-4cdf1.firebaseio.com",
    projectId: "todo-4cdf1",
    storageBucket: "todo-4cdf1.appspot.com",
    messagingSenderId: "1035199060151",
    appId: "1:1035199060151:web:3d76cad8f48b78e52d5532",
    measurementId: "G-TZ1BWZ3JFY"
};

firebase.initializeApp(firebaseConfig);
const username = document.getElementById("name")
const password = document.getElementById("pass")
const db = firebase.database();
const add = () => {
    db.ref('tomObject/Users/' + username.value).set({
        username: username.value,
        password: password.value,
    })
}
const login = () => {
    db.ref(`tomObject/Users/${username.value}`).once('value').then(snap => {
        if (snap.val() == null) {
            console.log('user oldsongui')
        } else {
            if (password.value == snap.val().password) {
                window.location.href = `doto.html?userName=${username.value}`
            } else {
                console.log('password buruu bna')
            }
        }
    })
}