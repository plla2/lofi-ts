import { Link } from "react-router-dom";
import { CONSTANTS } from "../../constants/constant";
import "./Header.scss";

const Header = () => {
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
        <div>toggle</div>
        <button className="fullscreen-btn">
          <i className="fas fa-expand fa-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
