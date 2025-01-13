import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  let btnname = "Login";
  const [btnnameReact, setbtnnamReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>

          <li>Cart</li>
          <button
            className="Login"
            onClick={() => {
              // setbtnnamReact  ("Logout");
              btnnameReact === "Login"
                ? setbtnnamReact("Logout")
                : setbtnnamReact("Login");
            }}
          >
            {btnnameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
