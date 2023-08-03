import React, { useState } from "react";
import "./styles.scss";
import ReactAudioPlayer from "react-audio-player";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { changeMoodStatus } from "../../store/moodSlice";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { changeVolume } from "../../store/changeVolumeSlice";

const Board = () => {
  const dispatch = useAppDispatch();
  const [moodOpen, setMoodOpen] = useState(false);
  const [focusOpen, setFocusOpen] = useState(false);

  const rainData = useAppSelector((state) => state.rain);
  const moodData = useAppSelector((state) => state.mood);
  const volumeData = useAppSelector((state) => state.volume);
  const { rainValue } = rainData;
  const { moodMode } = moodData;
  const { volumeValue } = volumeData;
  console.log("volumeValue", volumeValue);
  const [cityTraffic, setCityTraffic] = useState<number | undefined>(0);
  console.log("cityTraffic", cityTraffic);
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

  const volumeChangeHandler = (_e: Event, value: number | number[]) => {
    dispatch(changeVolume(value as number));
  };
  const volumeHandler = (_e: Event, value: number | number[]): void => {
    console.log(_e);
    const vol = Number(value) / 100;
    setCityTraffic(vol);
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
            volume={Number(cityTraffic) / 100}
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
                <div
                  id="chill"
                  onClick={moodChangeHandler}
                  className={`item ${moodMode === "chill" ? "active" : ""}`}
                >
                  <i id="chill" className="fas fa-coffee fa-2x"></i>
                  <span id="chill">Chill</span>
                </div>
                <div
                  id="jazzy"
                  onClick={moodChangeHandler}
                  className={`item ${moodMode === "jazzy" ? "active" : ""}`}
                >
                  <i id="jazzy" className="fas fa-guitar fa-2x"></i>
                  <span id="jazzy">Jazzy</span>
                </div>
                <div
                  id="sleep"
                  onClick={moodChangeHandler}
                  className={`item ${moodMode === "sleep" ? "active" : ""}`}
                >
                  <i id="sleep" className="fas fa-moon fa-2x"></i>
                  <span id="sleep">Sleep</span>
                </div>
              </div>
              <div className="volume">
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <i className="fas fa-volume-down fa-lg"></i>
                  <Slider
                    className="volume-slider"
                    value={volumeValue}
                    onChange={volumeChangeHandler}
                  />
                  <i className="fas fa-volume-up fa-lg"></i>
                </Stack>
              </div>
              <h5>Background Sound</h5>
              <div className="backgroundSound">
                <div className="sound-option">
                  <p>City traffic</p>
                  <ReactAudioPlayer
                    preload="auto"
                    autoPlay
                    src="./assets/musics/city_traffic.mp3"
                    loop
                    volume={cityTraffic}
                  />
                  <Slider
                    name="CityTraffic"
                    className="slider"
                    value={cityTraffic ? cityTraffic * 100 : 0}
                    onChange={volumeHandler}
                  />
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
