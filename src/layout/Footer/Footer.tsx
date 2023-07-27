import { useState } from "react";
import { chill, jazzy, sleep } from "../../data/songData";
import { useAppSelector } from "../../store/hook";
import { CONSTANTS } from "../../constants/constant";
import Player from "../../components/Player/Player";
import "./Footer.scss";

const Footer = () => {
  const data = useAppSelector((state) => state.mood);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const { moodMode } = data;
  return (
    <div className="footer">
      <div className="song-name">
        {moodMode === "chill" ? (
          <span>Song name : {chill[currentSongIndex].name}</span>
        ) : moodMode === "jazzy" ? (
          <span>Song name : {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name : {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className="controller">
        <Player />
      </div>
      <div className="author">
        Made by:
        <a
          href={CONSTANTS.Author_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="author-name"
        >
          {CONSTANTS.Author}
        </a>
      </div>
    </div>
  );
};

export default Footer;
