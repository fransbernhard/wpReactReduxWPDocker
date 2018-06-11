import firebase from 'firebase'

const config = {
  apiKey: "XXXX",
  authDomain: "myreactproject-c13f2.firebaseapp.com",
  databaseURL: "https://myreactproject-c13f2.firebaseio.com",
  projectId: "myreactproject-c13f2",
  storageBucket: "myreactproject-c13f2.appspot.com",
  messagingSenderId: "478522543107"
}

const app = firebase.initializeApp(config)

export default app
