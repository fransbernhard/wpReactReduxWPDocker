import firebase from 'firebase'

const config = {
  apiKey: "xxxxxxxx",
  authDomain: "fir-virginity.firebaseapp.com",
  databaseURL: "https://fir-virginity.firebaseio.com",
  projectId: "fir-virginity",
  storageBucket: "fir-virginity.appspot.com",
  messagingSenderId: "990904431448"
}

const app = firebase.initializeApp(config)

export default app
