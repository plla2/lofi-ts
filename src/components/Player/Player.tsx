import prevBtn from "../../../public/assets/icons/prev.svg";
import playBtn from "../../../public/assets/icons/play.svg";
import pauseBtn from "../../../public/assets/icons/pause.svg";
import nextBtn from "../../../public/assets/icons/next.svg";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store/hook";

interface Props {
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  songs: { id: number; name: string; mood: string; src: string }[];
}

const Player = ({ currentSongIndex, setCurrentSongIndex, songs }: Props) => {
  const data = useAppSelector((state: any) => state.volume);

  const { volumeValue } = data as { volumeValue: number };

  const audioElement: MutableRefObject<HTMLAudioElement | null | undefined> =
    useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.volume = volumeValue / 100;
  });

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
