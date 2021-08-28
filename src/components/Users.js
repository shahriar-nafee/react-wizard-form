import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Users() {
  const userData = useSelector((state) => state.game.userData);

  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="row justify-content-center mt-5 p-4">
          <div className="text-center">
            <h4>All Users</h4>
          </div>
          <div className="text-end">
            <Link to="/step1">
              <button className="btn btn-primary">ADD NEW USER</button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
