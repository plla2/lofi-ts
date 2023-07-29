import prevBtn from "../../../public/assets/icons/prev.svg";
import playBtn from "../../../public/assets/icons/play.svg";
import pauseBtn from "../../../public/assets/icons/pause.svg";
import nextBtn from "../../../public/assets/icons/next.svg";

const Player = () => {
  const data = useSelector((state) => state.volume);

  const { volumeValue } = data;

  const audioElement = useRef();
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
      <audio loop></audio>
      <div className="music-player--controls">
        <button>
          <img src={prevBtn} alt="이전 버튼" />
        </button>
        <button>
          <img src={playBtn} alt="시작 버튼" />
        </button>
        <button>
          <img src={nextBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Player;
