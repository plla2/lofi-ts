import { Link } from "react-router-dom";
import { CONSTANTS } from "../../constants/constant";
import "./Header.scss";
import DarkMode from "../../components/DarkMode";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { changeDayNight } from "../../store/modeSlice";

const Header = () => {
  const daynight = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();
  const { mode } = daynight;

  const daynightHandler = () => {
    dispatch(changeDayNight(mode));
  };

  return (
    <nav className="wrap">
      <Link to="/">
        <img src="/assets/icons/lofi-logo.gif" alt="로고 이미지" />
      </Link>
      <div className="nav-menu">
        <a href={CONSTANTS.Author_GITHUB} rel="noreferrer" target="_blank">
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </a>
        <div onClick={daynightHandler}>
          <DarkMode theme={mode} />
        </div>
        <button className="fullscreen-btn">
          <i className="fas fa-expand fa-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
