import { Link } from "react-router-dom";
import { CONSTANTS } from "../../constants/constant";
import "./Header.scss";
import DarkMode from "../../components/DarkMode";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { changeDayNight } from "../../store/modeSlice";
import logo from "../../assets/icons/lofi-logo.gif";
import { useState } from "react";

const Header = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const daynight = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();
  const { mode } = daynight;
  console.log(mode);

  const daynightHandler = () => {
    dispatch(changeDayNight());
  };

  const fullScreenHandler = () => {
    if (!fullScreen) {
      setFullScreen(true);
      const e = document.documentElement;
      void e.requestFullscreen();
    } else {
      setFullScreen(false);
      if (!document.exitFullscreen) {
        void document.exitFullscreen();
      }
    }
  };

  return (
    <nav className="wrap">
      <Link to="/">
        <img src={logo} alt="로고 이미지" />
      </Link>
      <div className="nav-menu"></div>
      <div className="nav-menu">
        <a href={CONSTANTS.Author_GITHUB} rel="noreferrer" target="_blank">
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </a>
        <div onClick={daynightHandler}>
          <DarkMode theme={mode} />
        </div>
        <button className="fullscreen-btn" onClick={fullScreenHandler}>
          <i className="fas fa-expand fa-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
