import { useAppSelector } from "../../store/hook";
import RainToggleBtn from "../RainToggleBtn/RainToggleBtn";
import "../../pages/Home/Home.scss";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import Board from "../Board/Board";

export interface timeType {
  hour: number;
  minute: number;
  second: number;
}

const Home = () => {
  const [timerStart, setTimerStart] = useState(false);

  const daynight = useAppSelector((state) => state.mode);
  const rain = useAppSelector((state) => state.rain);

  const { mode } = daynight;
  const { rainMode } = rain;

  const combineMode = `${mode}-${rainMode}`;

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0);

  const { seconds, minutes, hours, isRunning, pause, restart, resume } =
    useTimer({
      expiryTimestamp,
      onExpire: (): void => setTimerStart(false),
    });

  const setTimeHandler = ({ hour, minute, second }: timeType) => {
    const time = new Date();
    const setupTime =
      Number(hour) * 3600 + Number(minute) * 60 + Number(second);
    time.setSeconds(time.getSeconds() + setupTime);
  };
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
      <Board
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        isRunning={isRunning}
        pause={pause}
        restart={restart}
        resume={resume}
        timerStart={timerStart}
        setTimerStart={setTimerStart}
        setTimerHandler={setTimeHandler}
      />
    </>
  );
};

export default Home;
