if (typeof window !== "undefined") {
  var scoreRedux = JSON.parse(localStorage.getItem("score"));
} else {
  var scoreRedux = -1;
}
const initState = {
  authError: null,
  buttonLogin: "Login",
  alertLogin: "",
  scoreRedux: scoreRedux || "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "EMPTY_FORM":
      return {
        ...state,
        authError: "Form tidak boleh kosong !!",
        buttonLogin: "Login",
      };
    case "LESS_PASSWORD":
      return {
        ...state,
        authError: "Password minimal 6 karakter !!",
        buttonLogin: "Login",
      };
    case "LOGIN_PROCESS":
      return {
        ...state,
        authError: null,
        buttonLogin: "Process..",
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Incorrect Password or Email",
        buttonLogin: "Login",
      };
    case "LOGIN_SUCCESS":
      if (scoreRedux === -1) {
        scoreRedux = action.score;
      }
      return {
        ...state,
        authError: null,
        token: action.token,
        alertLogin: "Login Berhasil",
        buttonLogin: "Welcome",
        scoreRedux: scoreRedux,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        token: action.token,
        alertLogin: "",
        buttonLogin: "Login",
      };
    default:
      return state;
  }
};

export default authReducer;
