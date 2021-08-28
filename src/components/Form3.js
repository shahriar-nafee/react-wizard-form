import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { handleSubmitAction } from "../_redux/formAction";

function Form3() {
  const history = useHistory();
  const dispatch = useDispatch();
  const form1 = useSelector((state) => state.game.form1);
  const form2 = useSelector((state) => state.game.form2);

  const onSubmit = () => {
    const data = {
      userName: form2.userName,
      email: form1.email,
    };
    dispatch(handleSubmitAction(data));
    alert(" data submitted successfully");
    history.push("/");
  };

  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 col-10 bg-light p-4 shadow-lg mt-5">
            <div className="text-center">
              <h4>Summary</h4>
            </div>
            <div>
              <h5>
                <Link className="text-decoration-none">Personal Details:</Link>
              </h5>
              <div>
                <strong>First Name: </strong>
                {form1.firstName}
              </div>
              <div>
                <strong>Last Name: </strong>
                {form1.lastName}
              </div>
              <div>
                <strong>Email: </strong>
                {form1.email}
              </div>
              <div>
                <strong>Country: </strong>
                {form1.country}
              </div>
            </div>
            <hr />
            <div className="mt-2">
              <h5>
                <Link className="text-decoration-none">Account Details:</Link>
              </h5>
              <div>
                <strong>User Name: </strong>
                {form2.userName}
              </div>
              <div>
                <strong>Password: </strong>
                {form2.password}
              </div>
            </div>
            <hr />
            <div className="text-end mt-3">
              <button
                className="btn btn-secondary"
                onClick={() => history.goBack()}
              >
                Prev
              </button>
              <button
                className="btn btn-primary m-2"
                type="submit"
                onClick={() => onSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form3;
