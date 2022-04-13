if (typeof window !== "undefined") {
  var scoreRedux = JSON.parse(localStorage.getItem("score"));
} else {
  var scoreRedux = 0;
}

const initState = {
  authError: "",
  buttonLogin: "Login",
  scoreRedux: scoreRedux || "0",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "EMPTY_FORM":
      return {
        ...state,
        authError: "Form tidak boleh kosong !!",
        buttonLogin: "Login",
      };
    case "INVALID_EMAIL":
      return {
        ...state,
        authError: "Masukkan alamat email yang valid !!",
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
        authError: "",
        buttonLogin: "Process..",
      };
    case "AUTH_ERROR":
      return {
        ...state,
        authError: "",
        buttonLogin: "Login",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.token,
        authError: "",
        buttonLogin: "Welcome",
        // scoreRedux: score,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        token: action.token,
        authError: "",
        buttonLogin: "Login",
      };
    default:
      return state;
  }
};

export default authReducer;
