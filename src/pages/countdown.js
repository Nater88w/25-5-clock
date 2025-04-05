import Button from "./button";
import { HiMiniPlayPause } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
export default function Countdown({
  breaks,
  session,
  timerRun,
  timer,
  setTimer,
  minutes,
  seconds,
  display,
  setDisplay,
}) {
  useEffect(() => {
    if (timerRun) {
      const interval = setInterval(function () {
        if (minutes.current == null && seconds.current == null) {
          if (!display) {
            minutes.current = session;
          } else {
            minutes.current = breaks;
          }
        }
        if (seconds.current <= 0 && minutes.current <= 0) {
          minutes.current = !timer ? breaks : session;
          setDisplay((display) => !display);
        }
        if (seconds.current <= 0) {
          minutes.current = minutes.current - 1;
          seconds.current = 60;
        }

        seconds.current = seconds.current - 1;
        setTimer(
          `${
            minutes.current.toString().length <= 1
              ? "0" + minutes.current
              : minutes.current
          }:${
            seconds.current.toString().length <= 1
              ? "0" + seconds.current
              : seconds.current
          }`
        );
      }, 1000);
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [timerRun]);
  function changeDisplay() {
    setDisplay((display) => !display);
  }

  return <p id="time-left">{timer ? timer : session + ":00"}</p>;
}
