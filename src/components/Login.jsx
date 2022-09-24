/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
// import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import bgImage from "../assets/images/undraw_remotely_2j6y.svg";
const Login = () => {
  return (
    <Fragment>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={bgImage}
                alt="Image"
                className="img-fluid"
                style={{ height: "450px" }}
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>Login</h3>
                  </div>
                  <form action="#" method="post">
                    <div className="form-group mb-2">
                      {/* <label for="">Email</label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group  mb-4">
                      {/* <label for="">Password</label> */}
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>

                    <div className="d-flex mb-5 align-items-center">
                      {/* <label className="control control--checkbox mb-0">
                        <span className="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div className="control__indicator"></div>
                      </label> */}
                      <span className="ms-auto">
                        <a href="#" className="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>

                    <input
                      type="submit"
                      value="Log In"
                      className="btn d-grid gap-2 col-12 btn-primary"
                    />

                    <span className="d-block text-left my-4 text-muted">
                      &mdash; or Registration with &mdash;
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
