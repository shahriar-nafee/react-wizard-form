import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleForm1Action } from "../_redux/formAction";
import { useForm } from "react-hook-form";

const Game = () => {
  const form1 = useSelector((state) => state.game.form1);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    history.push("/step2");
  };

  const handleTextInput = (name, value) => {
    dispatch(handleForm1Action(name, value));
  };

  console.log(`form1`, form1);
  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 col-10 bg-light p-4 shadow-lg mt-5">
            <div className="text-center">
              <h4>Please fill with your details</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="First Name"
                className="form-control"
                value={form1.firstName}
                {...register("firstName", { required: true })}
                onChange={(e) => handleTextInput("firstName", e.target.value)}
              />
              {errors.firstName && "First name is required."}
              <input
                placeholder="Last Name"
                className="form-control mt-2"
                value={form1.lastName}
                {...register("lastName", { required: true })}
                onChange={(e) => handleTextInput("lastName", e.target.value)}
              />
              {errors.lastName && "Last name is required."}

              <input
                placeholder="Your Email"
                type="email"
                className="form-control mt-2"
                value={form1.email}
                {...register("email", { required: true })}
                onChange={(e) => handleTextInput("email", e.target.value)}
              />
              {errors.email && "Email is required"}
              <select
                {...register("country", { required: true })}
                className="form-select mt-2"
                onChange={(e) => handleTextInput("country", e.target.value)}
                value={form1.country}
              >
                <option value="">Your country...</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="other">Other</option>
              </select>
              {errors.country && "Select Your country"}
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={form1.checkbox}
                  {...register("checkbox", { required: true })}
                  onChange={(e) =>
                    handleTextInput("checkbox", e.target.checked)
                  }
                />
                <label className="form-check-label">
                  Please accept our <Link to="#">Terms and Conditions</Link>
                </label>
              </div>
              <hr />
              <div className="text-end mt-3">
                <button className="btn btn-primary">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
