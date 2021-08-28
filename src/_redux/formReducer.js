import {
  HANDLE_FORM1_INPUT,
  HANDLE_FORM2_INPUT,
  FORM_SUBMIT,
  EMPTY_FORM,
} from "./types";

const initialState = {
  userData: [
    {
      userName: "asif",
      email: "asif@gmail.com",
    },
    {
      userName: "sakib",
      email: "sakib@gmail.com",
    },
    {
      userName: "rifat",
      email: "rifat@hotmail.com",
    },
  ],

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

    case FORM_SUBMIT:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };

    case EMPTY_FORM:
      return {
        ...state,
        form1: initialState.form1,
        form2: initialState.form2,
      };

    default:
      return state;
  }
}
