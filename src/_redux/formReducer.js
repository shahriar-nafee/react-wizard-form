import { HANDLE_FORM1_INPUT, HANDLE_FORM2_INPUT } from "./types";

const initialState = {
  form1: {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    checkbox: "",
  },
  form2: {
    userName: "",
    password: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HANDLE_FORM1_INPUT:
      const form1 = { ...state.form1 };
      form1[action.payload.name] = action.payload.value;
      return {
        ...state,
        form1,
      };
    case HANDLE_FORM2_INPUT:
      const form2 = { ...state.form2 };
      form2[action.payload.name] = action.payload.value;
      return {
        ...state,
        form2,
      };

    default:
      return state;
  }
}
