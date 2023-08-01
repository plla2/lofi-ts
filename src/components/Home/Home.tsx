import { useAppSelector } from "../../store/hook";
import RainToggleBtn from "../RainToggleBtn/RainToggleBtn";
import "../../pages/Home/Home.scss";

const Home = () => {
  const daynight = useAppSelector((state) => state.mode);
  const rain = useAppSelector((state) => state.rain);

  const { mode } = daynight;
  const { rainMode } = rain;

  const combineMode = `${mode}-${rainMode}`;
  console.log(combineMode);
  return (
    <>
      <div>
        <video
          loop
          autoPlay
          muted
          className={combineMode === "day-clear" ? "videoIn" : "videoOut"}
        >
          <source src="./assets/video/Day-sunny.mp4" type="video/mp4" />
        </video>
        <video
          loop
          autoPlay
          muted
          className={combineMode === "day-rain" ? "videoIn" : "videoOut"}
        >
          <source src="./assets/video/Day-rainny.mp4" type="video/mp4" />
        </video>
        <video
          loop
          autoPlay
          muted
          className={combineMode === "night-clear" ? "videoIn" : "videoOut"}
        >
          <source src="./assets/video/Night-clear.mp4" type="video/mp4" />
        </video>
        <video
          loop
          autoPlay
          muted
          className={combineMode === "night-rain" ? "videoIn" : "videoOut"}
        >
          <source src="./assets/video/Night-rainny.mp4" type="video/mp4" />
        </video>
      </div>
      <RainToggleBtn />
    </>
  );
};

export default Home;
