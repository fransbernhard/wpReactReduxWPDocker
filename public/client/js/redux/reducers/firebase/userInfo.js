import { REGISTER_USER, LOGIN_USER, ERROR, SUCCESS } from "../../action-types/index"
import store from "../../store/index"
import fb, { auth, provider } from '../../../components/Firebase/Database'

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      const email = action.payload.email
      const password = action.payload.password

      fb.auth().signInWithEmailAndPassword(email, password)
        .then(() => { user = fb.auth().currentUser })
        .then( user => {
          store.dispatch({
            type: SUCCESS,
            payload: user
          })
        }).catch(e => {
          store.dispatch({
            type: ERROR,
            payload: e.message
          })
        })

      return state
    case REGISTER_USER:
      const em = action.payload.email
      const pass = action.payload.password
      const uname = action.payload.username

      fb.auth().createUserWithEmailAndPassword(em, pass)
        .then(() => { user = fb.auth().currentUser })
        .then(() => {
          user.updateProfile({
            displayName: uname
          }).then(() => {
            console.log("update successful")
          }, function(e) {
            store.dispatch({
              type: ERROR,
              payload: e
            })
          })
        }).catch( e => {
          store.dispatch({
            type: ERROR,
            payload: e.message
          })
        })
      return state
    case SUCCESS:
      return action.payload
    case ERROR:
      return action.payload
    default:
      return state
  }
}

export default userInfo
