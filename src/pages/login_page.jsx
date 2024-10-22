import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/login_page.scss";
import { useNavigate } from "react-router-dom";

const generateCaptcha = () => {
  const navigate = useNavigate();
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const login_page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = useState("");

  const handleLogin = () => {
    // Perform login authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Entered CAPTCHA:", enteredCaptcha);
  };

  const regenerateCaptcha = () => {
    setCaptcha(generateCaptcha());
  };
  return (
    <>
      <div className="login-page">
        <div className="login">
          <div className="login-left">
            <div className="welcome-heading">
              <h1> Welcome To SvvvInvento</h1>
            </div>
            <div className="img-wrapper">
              <img src={"/assets/loginimg.svg"} alt="" />
            </div>
          </div>
          <div className="login-right">
            {/* <h1>Login</h1> */}
            <div className="login-container">
              <h2>Login</h2>
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="captcha-group">
                  <label>CAPTCHA : {captcha}</label>
                </div>
                <div className="form-group">
                  <label>Enter CAPTCHA:</label>
                  <input
                    type="text"
                    value={enteredCaptcha}
                    onChange={(e) => setEnteredCaptcha(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/hero");
                  }}
                  className="login-button"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login_page;
