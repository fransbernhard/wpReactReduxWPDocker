import { REGISTER_USER_SUCCESS, REGISTER_USER, REGISTER_ERROR } from "../../action-types/index"
import store from "../../store/index"
import fb from '../../../components/Firebase/Database'

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

const register = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const email = action.payload.email
      const password = action.payload.password
      const username = action.payload.username

      fb.auth().createUserWithEmailAndPassword(email, password)
        .then(() => { user = fb.auth().currentUser })
        .then(() => {
          user.updateProfile({
            displayName: username
          }).then(() => {
            console.log("update successful")
          }, function(err) {
            store.dispatch({
              type: REGISTER_ERROR,
              payload: err
            })
          })
        }).catch( e => {
          store.dispatch({
            type: REGISTER_ERROR,
            payload: e.message
          })
        })
      return state
    case REGISTER_USER_SUCCESS:
      return action.payload
    case REGISTER_ERROR:
      return action.payload
    default:
      return state
  }
}

export default register
