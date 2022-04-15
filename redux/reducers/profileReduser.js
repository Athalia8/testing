import { UPDATE_PROFILE } from "../actions/profileAction"

const initialState = {
  button: "Simpan Perubahan"
}

const games = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        button: action.button,
      }
    default:
      return state
  }
}

export default games