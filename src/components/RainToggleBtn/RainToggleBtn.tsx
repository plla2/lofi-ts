import ReactAudioPlayer from "react-audio-player";
import rainCity from "../../../public/assets/musics/rain_city.mp3";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useState } from "react";
import { changeRainStatus } from "../../store/rainSlice";
import "./styles.scss";

const RainToggleBtn = () => {
  const dispatch = useAppDispatch();
  const rain = useAppSelector((state) => state.rain);
  const { rainMode, rainValue } = rain;

  const [buttonClick, setButtonClick] = useState(false);

  const rainButtonHandler = () => {
    if (rainValue === 0) {
      dispatch(changeRainStatus({ currentStatus: rainMode, value: 30 }));
    } else {
      dispatch(changeRainStatus({ currentStatus: rainMode, value: 0 }));
    }
    setButtonClick(!buttonClick);
  };
  console.log(buttonClick);
  return (
    <div className="wrapper">
      {buttonClick && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src={rainCity}
          loop
          volume={rainValue / 100}
        />
      )}
      <button className="button" onClick={rainButtonHandler}>
        <div className="icon">
          <i className="fas fa-cloud-rain"></i>
        </div>
      </button>
    </div>
  );
};

export default RainToggleBtn;
