import { useRef } from "react";
import { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import bg from "./bg.jpg";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button style={{"cursor":"pointer"}} className="loginButton"><Link style={{"textDecoration":"none","color":"white"}} to={'/login'}>Sign In</Link></button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            
            <button className="registerButton" onClick={handleFinish}>
            <Link style={{"textDecoration":"none","color":"white"}} to={'/login'}>
              Start
              </Link>
            </button>
            
          </form>
        )}
      </div>
    </div>
  );
}