
const initState = {
  registError: "",
  buttonRegister: "Register",
};

const registReducer = (state = initState, action) => {
  switch (action.type) {
    case "EMPTY_FORM":
      return {
        ...state,
        registError: "Form tidak boleh kosong !!",
        buttonRegister: "Register",
      };
    case "INVALID_EMAIL":
      return {
        ...state,
        registError: "Masukkan alamat email yang valid !!",
        buttonRegister: "Register",
      };
    case "LESS_PASSWORD":
      return {
        ...state,
        registError: "Password minimal 6 karakter !!",
        buttonRegister: "Register",
      };
    case "REGISTER_PROCESS":
      return {
        ...state,
        registError: "",
        buttonRegister: "Process..",
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        registError: "",
        buttonRegister: "Register",
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registError: "",
        buttonRegister: "Welcome",
      };
    default:
      return state;
  }
};

export default registReducer;
