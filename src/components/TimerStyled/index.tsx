import Digit from "../Digit";
interface PropType {
  seconds: number;
  minutes: number;
  hours: number;
}

const TimerStyled = ({ seconds, minutes, hours }: PropType) => {
  return (
    <div className="timerContainer">
      <Digit value={hours} title="HOURS" />
      <span className="separatorContainer">
        <span className="separator" />
        <span className="separator" />
      </span>
      <Digit value={minutes} title="MINUTES" />
      <span className="separatorContainer">
        <span className="separator" />
        <span className="separator" />
      </span>
      <Digit value={seconds} title="SECONDS" />
    </div>
  );
};

export default TimerStyled;
