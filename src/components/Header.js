import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let btnname = "Login";
  const [btnnameReact, setbtnnamReact] = useState("Login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg  ">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-2 m-2">
          <li className="p-4">Online status:{onlinestatus ? "💚" : "❤️‍🔥"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>

          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="p-4">Cart</li>
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
