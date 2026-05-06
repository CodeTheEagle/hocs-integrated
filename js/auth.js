const firebaseConfig = {
    apiKey: "AIzaSyBLI3iVw_g_A58tIvo_wIRLkP_i7s9sHuA",
    authDomain: "hocs-internal.firebaseapp.com",
    projectId: "hocs-internal",
    storageBucket: "hocs-internal.firebasestorage.app",
    messagingSenderId: "102526855074",
    appId: "1:102526855074:web:2384549083dda19d48b4fb"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById('loginBtn').onclick = () => {
    auth.signInWithPopup(provider).then((result) => {
        const allowed = ["yusuf@hocsintegrated.com", "m.yusufcobanoglu1@gmail.com", "EagleSTORM@gmail.com"];
        if (allowed.includes(result.user.email)) {
            document.getElementById('authLayer').style.display = 'none';
            document.getElementById('mainSystem').style.display = 'flex';
        } else {
            alert("Yetkisiz erişim denemesi! Adıyaman HQ tarafından loglandı.");
            auth.signOut();
        }
    });
};
