// ToggleBtn.js
import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme";
import "./style.scss";

const ToggleBtn = () => {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  const dispatch = useDispatch();

  return (
    <div className="dark-mode">
      <label htmlFor="theme-toggle">
        <input
          type="checkbox"
          id="theme-toggle"
          className="moon-icon"
          checked={theme === "dark"}
          onChange={() => dispatch(toggleTheme())}
        />
        <span className="icon-container">
          <FaMoon className="moon" />
          <IoIosSunny className="sun" />
        </span>
        <span className="toggle"></span>
        <span className="animateBg"></span>
      </label>
    </div>
  );
};

export default ToggleBtn;
