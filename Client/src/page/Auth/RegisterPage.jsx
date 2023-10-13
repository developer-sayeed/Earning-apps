import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createtoast } from "../../utils/reactToastify.js";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { createUser } from "../../features/auth/authSliceApi.js";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { error, message } = useSelector((state) => state.auth);
  const [input, SetInput] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    fundpassword: "",
  });
  // Handle Input Chnage Login

  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle User Submit

  const handleUserRegister = (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.email ||
      !input.country ||
      !input.phone ||
      !input.password ||
      !input.referId ||
      !input.fundpassword
    ) {
      createtoast("All Fields Required", "warning");
    } else {
      dispatch(
        createUser({
          name: input.name,
          email: input.email,
          password: input.password,
          phone: input.phone,
          country: input.country,
          fundPassword: input.fundpassword,
          referId: input.referId,
        })
      );

      SetInput({
        name: "",
        email: "",
        phone: "",
        country: "",
        password: "",
        fundpassword: "",
        referId: "",
      });
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
  }, [error, message]);
  return (
    <>
      <div className="screen-1 registationpage">
        <div className="logo">
          <img
            src="https://www.pixelparfait.graphics/wp-content/uploads/2023/01/AMZN-e9f942e4.png"
            alt=""
          />
        </div>
        <form onSubmit={handleUserRegister}>
          <div className="amazonform">
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="amazonform">
            <input
              type="text"
              name="phone"
              value={input.phone}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Number"
            />
          </div>
          <div className="amazonform">
            <input
              type="text"
              name="country"
              value={input.country}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Country Name"
            />
          </div>
          <div className="amazonform">
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="amazonform">
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Type your Login password"
            />
          </div>
          <div className="amazonform">
            <input
              type="password"
              name="fundpassword"
              value={input.fundpassword}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Type your Fund password"
            />
          </div>
          <div className="amazonform">
            <input
              type="text"
              name="referId"
              value={input.referId}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Refer ID"
            />
          </div>
          <button type="submit" className="login">
            Login
          </button>
        </form>
        <div className="footer">
          <Link to={"/login"}>Login Here</Link>
          <Link to={"/register"}>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
