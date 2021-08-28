import {
  HANDLE_FORM1_INPUT,
  HANDLE_FORM2_INPUT,
  FORM_SUBMIT,
  EMPTY_FORM,
} from "./types";

export const handleForm1Action = (name, value) => (dispatch) => {
  let form = {
    name: name,
    value: value,
  };
  dispatch({ type: HANDLE_FORM1_INPUT, payload: form });
};
export const handleForm2Action = (name, value) => (dispatch) => {
  let form = {
    name: name,
    value: value,
  };
  dispatch({ type: HANDLE_FORM2_INPUT, payload: form });
};
export const handleSubmitAction = (data) => (dispatch) => {
  dispatch({ type: FORM_SUBMIT, payload: data });
  dispatch({ type: EMPTY_FORM });
};
