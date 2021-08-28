import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleForm2Action } from "../_redux/formAction";

function Form2() {
  const form2 = useSelector((state) => state.game.form2);
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTextInput = (name, value) => {
    dispatch(handleForm2Action(name, value));
  };

  const onSubmit = () => {
    if (form2.password !== form2.confirmPassword) {
      return setError("Passwords do not match");
    } else {
      setError("");
      history.push("/step3");
    }
  };

  console.log("form2", form2);
  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 col-10 bg-light p-4 shadow-lg mt-5">
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="User Name"
                className="form-control"
                value={form2.userName}
                {...register("userName", { required: true })}
                onChange={(e) => handleTextInput("userName", e.target.value)}
              />
              {errors.userName && "User name is required."}
              <input
                placeholder="Password"
                type="password"
                className="form-control mt-2"
                value={form2.password}
                {...register("password", { required: true })}
                onChange={(e) => handleTextInput("password", e.target.value)}
              />
              {errors.password && "password is required."}

              <input
                placeholder="Confirm Password"
                type="password"
                value={form2.confirmPassword}
                className="form-control mt-2"
                {...register("confirmPassword", { required: true })}
                onChange={(e) =>
                  handleTextInput("confirmPassword", e.target.value)
                }
              />

              <hr />
              <div className="text-end mt-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => history.goBack()}
                >
                  Prev
                </button>
                <button className="btn btn-primary m-2">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form2;
