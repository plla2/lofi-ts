import React, { useState } from "react";
import "./styles.scss";
import ReactAudioPlayer from "react-audio-player";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { changeMoodStatus } from "../../store/moodSlice";

const Board = () => {
  const dispatch = useAppDispatch();
  const [moodOpen, setMoodOpen] = useState(false);
  const [focusOpen, setFocusOpen] = useState(false);

  const rainData = useAppSelector((state) => state.rain);
  const moodData = useAppSelector((state) => state.mood);
  const { rainValue } = rainData;
  const { moodMode } = moodData;

  const [cityTraffic, setCityTraffic] = useState(0);
  const [cityRain, setCityRain] = useState(rainValue);
  const [fireplace, setFireplace] = useState(0);
  const [snow, setSnow] = useState(0);
  const [summerStorm, setSummerStorm] = useState(0);
  const [fan, setFan] = useState(0);
  const [forestNight, setForestNight] = useState(0);
  const [wave, setWave] = useState(0);
  const [wind, setWind] = useState(0);
  const [people, setPeople] = useState(0);
  const [river, setRiver] = useState(0);
  const [rainForest, setRainForest] = useState(0);

  const openMoodHandler = () => {
    setMoodOpen(!moodOpen);
    setFocusOpen(false);
  };
  const openFocusHandler = () => {
    setFocusOpen(!focusOpen);
    setMoodOpen(false);
  };
  const moodChangeHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const clickedElementId = (e.target as HTMLDivElement).id;
    dispatch(changeMoodStatus(clickedElementId));
  };
  return (
    <div className="wrapper">
      {!moodOpen && (
        <div>
          <ReactAudioPlayer
            preload="auto"
            autoPlay
            src="/assets/musics/city_traffic.mp3"
            loop
            volume={cityTraffic / 100}
          />
          <ReactAudioPlayer
            preload="auto"
            autoPlay
            src="/assets/musics/rain_city.mp3"
            loop
            volume={rainValue / 100}
          />
        </div>
      )}
      <div
        className={`board ${moodOpen ? "mood" : ""} ${
          focusOpen ? "focus" : ""
        }`}
      >
        <div className="modifier__icon">
          <div className={`icon ${moodOpen ? "active" : ""}`}>
            <i onClick={openMoodHandler} className="fas fa-sliders-h fa-2x"></i>
          </div>
          {moodOpen && (
            <div className="modifierBox">
              <h4>Mood</h4>
              <div className="options">
                <div id="chill" onClick={moodChangeHandler}>
                  <i id="chill" className="fas fa-coffee fa-2x"></i>
                  <span id="chill">Chill</span>
                </div>
                <div id="jazzy" onClick={moodChangeHandler}>
                  <i id="jazzy" className="fas fa-guitar fa-2x"></i>
                  <span id="jazzy">Jazzy</span>
                </div>
                <div id="sleep" onClick={moodChangeHandler}>
                  <i id="sleep" className="fas fa-moon fa-2x"></i>
                  <span id="sleep">Sleep</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
