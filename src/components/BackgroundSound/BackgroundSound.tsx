import { Slider } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";

interface propsType {
  src: string;
  volume: number;
  onChange: (value: number) => void;
}

const BackgroundSound = ({ src, volume, onChange }: propsType) => {
  return (
    <>
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src={src}
        loop
        volume={volume}
      />
      <Slider
        className="slider"
        value={volume * 100}
        onChange={(_e, value) => onChange((value as number) / 100)}
      />
    </>
  );
};

export default BackgroundSound;
