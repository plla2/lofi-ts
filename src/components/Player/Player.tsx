import prevBtn from "../../../public/assets/icons/prev.svg";
import playBtn from "../../../public/assets/icons/play.svg";
import pauseBtn from "../../../public/assets/icons/pause.svg";
import nextBtn from "../../../public/assets/icons/next.svg";

const Player = () => {
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
