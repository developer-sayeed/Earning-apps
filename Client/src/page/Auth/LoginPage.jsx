import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { createtoast } from "../../utils/reactToastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSliceApi";
import { setMessageEmpty } from "../../features/auth/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, error, message } = useSelector((state) => state.auth);

  const [input, SetInput] = useState({
    email: "",
    password: "",
  });

  // Handle Input Chnage Login

  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // Handle From Submit

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (!input.password || !input.email) {
      createtoast("All Fields are required", "warn");
    } else {
      dispatch(loginUser(input));
    }
  };
  useEffect(() => {
    if (error) {
      createtoast(error, "error");
      dispatch(setMessageEmpty());
    } else if (message) {
      createtoast(message, "success");
      dispatch(setMessageEmpty());
    }
    if (user) {
      navigate("/");
    }
  }, [error, message, dispatch, user, navigate]);
  return (
    <>
      <div className="screen-1">
        <div className="logo">
          <img
            src="https://www.pixelparfait.graphics/wp-content/uploads/2023/01/AMZN-e9f942e4.png"
            alt=""
          />
        </div>
        <form onSubmit={handleUserLogin}>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <div className="sec-2">
              <ion-icon name="mail-outline" />
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Your Email Address"
              />
            </div>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline" />
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Type your password"
              />
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>
          <button type="submit" className="login">
            Login{" "}
          </button>
        </form>

        <div className="footer">
          <Link to={"/register"}>Signup</Link>
          <Link to={"/register"}>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
