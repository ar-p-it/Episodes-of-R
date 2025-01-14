import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let btnname = "Login";
  const [btnnameReact, setbtnnamReact] = useState("Login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status:{onlinestatus ? "💚" : "❤️‍🔥"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

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
