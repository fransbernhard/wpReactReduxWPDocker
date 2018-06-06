import { USER_LOGIN_SUCCESS, USER_LOGIN, USER_LOGIN_ERROR } from "../../action-types/index"
import store from "../../store/index"
import fb from '../../../components/Firebase/Database'

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

const login = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const email = action.payload.email
      const password = action.payload.password

      fb.auth().signInWithEmailAndPassword(email, password)
        .then( user => {
          store.dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user
          })
        }).catch(e => {
          store.dispatch({
            type: USER_LOGIN_ERROR,
            payload: e.message
          })
        })

      return state
    case USER_LOGIN_SUCCESS:
      console.log("USER IS LOGGED IN");
      console.log(user);
      return action.payload
    case USER_LOGIN_ERROR:
      return action.payload
    default:
      return state
  }
}

export default login
