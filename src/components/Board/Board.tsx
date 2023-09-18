import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { changeMoodStatus } from "../../store/moodSlice";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { changeVolume } from "../../store/changeVolumeSlice";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import TodoList from "../TodoList/TodoList";
import "./styles.scss";
import BackgroundSound from "../BackgroundSound/BackgroundSound";
import { BoardProps, SoundSettings } from "./BoardTypes";

const Board = ({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  restart,
  resume,
  timerStart,
  setTimerStart,
  setTimeHandler,
}: BoardProps) => {
  const dispatch = useAppDispatch();
  const [moodOpen, setMoodOpen] = useState(false);
  const [focusOpen, setFocusOpen] = useState(false);

  const rainData = useAppSelector((state) => state.rain);
  const moodData = useAppSelector((state) => state.mood);
  const volumeData = useAppSelector((state) => state.volume);
  const { rainValue } = rainData;
  const { moodMode } = moodData;
  const { volumeValue } = volumeData;

  const initialSoundSettings: SoundSettings = {
    cityTraffic: 0,
    cityRain: rainValue,
    fireplace: 0,
    snow: 0,
    summerStorm: 0,
    fan: 0,
    forestNight: 0,
    wave: 0,
    wind: 0,
    people: 0,
    river: 0,
    rainForest: 0,
  };

  const [soundSettings, setSoundSettings] =
    useState<SoundSettings>(initialSoundSettings);

  const updateSoundSettings = (updates: Partial<SoundSettings>) => {
    setSoundSettings((prevSettings) => ({ ...prevSettings, ...updates }));
  };

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
  return (
    <div className="wrapper">
      {!moodOpen && (
        <div>
          <ReactAudioPlayer
            preload="auto"
            autoPlay
            src="/assets/musics/city_traffic.mp3"
            loop
            volume={Number(soundSettings.cityTraffic) / 100}
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
                  <BackgroundSound
                    src="./assets/musics/city_traffic.mp3"
                    volume={soundSettings.cityTraffic}
                    onChange={(value) =>
                      updateSoundSettings({ cityTraffic: value })
                    }
                  />
                </div>
                <div className="sound-option">
                  <p>City rain</p>
                  <BackgroundSound
                    src="./assets/musics/rain_city.mp3"
                    volume={soundSettings.cityRain}
                    onChange={(value) =>
                      updateSoundSettings({ cityRain: value })
                    }
                  />
                </div>
                <div className="sound-option">
                  <p>Snow</p>
                  <BackgroundSound
                    src="./assets/musics/snow.mp3"
                    volume={soundSettings.snow}
                    onChange={(value) => updateSoundSettings({ snow: value })}
                  />
                </div>
                <div className="sound-option">
                  <p>Summer Storm</p>
                  <BackgroundSound
                    src="./assets/musics/summer_storm.mp3"
                    volume={soundSettings.summerStorm}
                    onChange={(value) =>
                      updateSoundSettings({ summerStorm: value })
                    }
                  />
                </div>
                <div className="sound-option">
                  <p>Fan</p>
                  <BackgroundSound
                    src="./assets/musics/fan.mp3"
                    volume={soundSettings.fan}
                    onChange={(value) => updateSoundSettings({ fan: value })}
                  />
                </div>
                <div className="sound-option">
                  <p>Forest Night</p>
                  <BackgroundSound
                    src="./assets/musics/forest_night.mp3"
                    volume={soundSettings.forestNight}
                    onChange={(value) =>
                      updateSoundSettings({ forestNight: value })
                    }
                  />
                </div>
                <div className="sound-option">
                  <p>Wave</p>
                  <BackgroundSound
                    src="./assets/musics/waves.mp3"
                    volume={soundSettings.wave}
                    onChange={(value) => updateSoundSettings({ wave: value })}
                  />
                </div>
                <div className="sound-option">
                  <p>Wind</p>
                  <BackgroundSound
                    src="./assets/musics/wind.mp3"
                    volume={soundSettings.wind}
                    onChange={(value) => updateSoundSettings({ wind: value })}
                  />
                </div>
                <div className="sound-option">
                  <p>River</p>
                  <BackgroundSound
                    src="./assets/musics/river.mp3"
                    volume={soundSettings.river}
                    onChange={(value) => updateSoundSettings({ river: value })}
                  />
                </div>
                <div className="sound-option">
                  <p>People</p>
                  <BackgroundSound
                    src="./assets/musics/people_talk_inside.mp3"
                    volume={soundSettings.people}
                    onChange={(value) => updateSoundSettings({ people: value })}
                  />
                </div>
                <div className="sound-option">
                  <p>Rain Forest</p>
                  <BackgroundSound
                    src="./assets/musics/rain_forest.mp3"
                    volume={soundSettings.rainForest}
                    onChange={(value) =>
                      updateSoundSettings({ rainForest: value })
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="modifier__icon">
          <div className={`icon ${focusOpen ? "active" : ""}`}>
            <i
              className="fas fa-book-reader fa-2x"
              onClick={openFocusHandler}
            ></i>
          </div>
        </div>
        {focusOpen && (
          <div className="modifierBox">
            <h4>Focus Mode</h4>
            <CountDownTimer
              seconds={seconds}
              minutes={minutes}
              hours={hours}
              isRunning={isRunning}
              pause={pause}
              restart={restart}
              resume={resume}
              timerStart={timerStart}
              setTimerStart={setTimerStart}
              setTimeHandler={setTimeHandler}
            />
            <h4>Todo List</h4>
            <TodoList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
