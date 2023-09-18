import { timeType } from "../Home/Home";

export interface SoundSettings {
  cityTraffic: number;
  cityRain: number;
  fireplace: number;
  snow: number;
  summerStorm: number;
  fan: number;
  forestNight: number;
  wave: number;
  wind: number;
  people: number;
  river: number;
  rainForest: number;
}
export interface BoardProps {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  pause: () => void;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean | undefined) => void;
  resume: () => void;
  timerStart: boolean;
  setTimerStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeHandler: ({ hour, minute, second }: timeType) => void;
}
