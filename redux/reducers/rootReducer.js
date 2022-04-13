import authReducer from "./authReducer";
import registReducer from "./registReduser";
import authGoogleReducer from "./authGoogleReduser";
import authFacebookReducer from "./authFacebookReducer";
import gameReducer from "./gameReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  regist: registReducer,
  google: authGoogleReducer,
  facebook: authFacebookReducer,
  game: gameReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
