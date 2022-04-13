if (typeof window !== "undefined") {
  var scoreRedux = JSON.parse(localStorage.getItem("score"));
} else {
  var scoreRedux = 0;
}

const initState = {
  buttonGoogle: "Google",
  scoreRedux: scoreRedux || "0",
};

const authGoogleReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_GOOGLE_PROCESS":
      return {
        ...state,
        buttonGoogle: "Process..",
      };
    case "LOGIN_GOOGLE_ERROR":
      return {
        ...state,
        buttonGoogle: "Google",
      };
    case "LOGIN_GOOGLE_SUCCESS":
      return {
        ...state,
        token: action.token,
        buttonGoogle: "Google",
        scoreRedux: score,
      };
    default:
      return state;
  }
};

export default authGoogleReducer;
