import prevBtn from "../../assets/icons/prev.svg";
import playBtn from "../../assets/icons/play.svg";
import pauseBtn from "../../assets/icons/next.svg";
import nextBtn from "../../assets/icons/pause.svg";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store/hook";
import { RootState } from "../../store/store";
import "./styles.scss";

interface Props {
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  songs: { id: number; name: string; mood: string; src: string }[];
}

const Player = ({ currentSongIndex, setCurrentSongIndex, songs }: Props) => {
  const data = useAppSelector((state: RootState) => state.volume);

  const { volumeValue } = data as { volumeValue: number };

  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioElement.current) return;

    if (isPlaying) {
      void audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.volume = volumeValue / 100;
  }, [isPlaying, volumeValue, audioElement]);

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
      <div className="music-player--controls">
        <button className="skip-btn" onClick={() => SkipSong(false)}>
          <img src={prevBtn} alt="이전 버튼" />
        </button>
        <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src={pauseBtn} alt="중지 버튼" />
          ) : (
            <img src={playBtn} alt="시작 버튼" />
          )}
        </button>
        <button className="skip-btn" onClick={() => SkipSong()}>
          <img src={nextBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Player;
