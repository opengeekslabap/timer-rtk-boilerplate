import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectTimer, timerSlice } from "./store/features/timer/timerSlice";

export default function App() {
  const timer = useAppSelector(selectTimer);
  const dispatch = useAppDispatch()
  const handleActivate = () => {

  }
  const handlePause = () => {
  }
  const handleStop = () => {
  }
  const handleAdd10Sec = () => {
  }
  return (
    <div>
      {`${0}ms `}
      <button
        onClick={handleActivate}
        disabled={true}
      >
        Activate
      </button>
      <button
        onClick={handlePause}
        disabled={true}
      >
        Pause
      </button>
      <button
        onClick={handleStop}
        disabled={true}
      >
        Stop
      </button>
      <button
        onClick={handleAdd10Sec}
        disabled={true}
      >
        Add 10Sec
      </button>
    </div>
  );
}
