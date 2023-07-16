import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store/hook";

const Player = ({ songs, currentSongIndex, setCurrentSongIndex }) => {
  const audioElement = useRef();
  const data = useAppSelector((state) => state.volume);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.volume = volume / 100;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      });
    }
  };
  return (
    <div className="music-player">
      <audio loop src={songs[currentSongIndex].src} ref={audioElement}></audio>
      <div className="music-player-controls">
        <button className="skip-btn" onClick={() => SkipSong(false)}>
          <img src="/assets/icons/prev.svg" />
        </button>
        <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src="/assets/icons/pause.svg" alt="" />
          ) : (
            <img src="/assets/icons/play/svg" alt="" />
          )}
        </button>
        <button className="skip-btn" onClick={() => SkipSong()}>
          <img src="/assets/icons/next.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Player;
