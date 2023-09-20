import { useState } from "react";
import "./styles.scss";
import TimerStyled from "../TimerStyled";
import { BoardProps } from "../Board/BoardTypes";

interface TimeStateType {
  hour: number;
  minute: number;
  second: number;
}

const CountDownTimer = ({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  setTimeHandler,
  setTimerStart,
  timerStart,
}: BoardProps) => {
  const [time, setTime] = useState<TimeStateType>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const setInputValue = (key: keyof TimeStateType, value: number) => {
    setTime({ ...time, [key]: value });
  };

  const setTimerBtnHandler = () => {
    setTimeHandler(time);
    setTimerStart(true);
  };

  const renderInput = (
    label: string,
    key: keyof TimeStateType,
    max: number
  ) => {
    return (
      <>
        <input
          className="number-input"
          type="number"
          value={time[key]}
          onChange={(e) => setInputValue(key, parseInt(e.target.value, 10))}
          max={max}
          min={0}
        />
        <span>{label}</span>
      </>
    );
  };

  const renderTimerControls = () => {
    if (isRunning) {
      return (
        <button className="buttonTimer" onClick={pause}>
          Pause
        </button>
      );
    } else {
      return (
        <button className="buttonTimer" onClick={resume}>
          Resume
        </button>
      );
    }
  };

  return (
    <div className="countdown">
      {timerStart ? (
        <div className="countdownRunning">
          <div className="displayTime">
            <TimerStyled seconds={seconds} minutes={minutes} hours={hours} />
          </div>
          <div className="controller">
            <button
              className="buttonTimer"
              onClick={() => setTimeHandler({ hour: 0, minute: 0, second: 0 })}
            >
              Cancel
            </button>
            {renderTimerControls()}
          </div>
        </div>
      ) : (
        <div className="countdownNotRun">
          <div className="input">
            {renderInput("hour", "hour", 24)}
            {renderInput("min", "minute", 60)}
            {renderInput("sec", "second", 60)}
          </div>
          <button className="buttonTimer setup" onClick={setTimerBtnHandler}>
            Set Timer
          </button>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;
