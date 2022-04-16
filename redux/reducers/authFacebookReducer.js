if (typeof window !== "undefined") {
  var scoreRedux = JSON.parse(localStorage.getItem("score"));
} else {
  var scoreRedux = 0;
}

const initState = {
  buttonFacebook: "Facebook",
  scoreRedux: scoreRedux || "0",
};

const authFacebookReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_FACEBOOK_PROCESS":
      return {
        ...state,
        buttonFacebook: "Process..",
      };
    case "LOGIN_FACEBOOK_ERROR":
      return {
        ...state,
        buttonFacebook: "Facebook",
      };
    case "LOGIN_FACEBOOK_SUCCESS":
      return {
        ...state,
        token: action.token,
        buttonFacebook: "Facebook",
        scoreRedux: score,
      };
    default:
      return state;
  }
};

export default authFacebookReducer;
