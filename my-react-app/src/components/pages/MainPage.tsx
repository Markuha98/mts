import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { addMessage } from "../../redux/actions/messageActions";
import OneMessagePage from "./OneMessagePage";

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.message.messages);

  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleStart = () => {
    if (intervalId === null) {
      const newIntervalId = setInterval(() => {
        dispatch(addMessage(message));
        console.log("start");
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleStop = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
      console.log("stop");
    }
  };

  return (
    <div>
      <button type="button" onClick={handleStart}>
        Старт
      </button>
      <button type="button" onClick={handleStop}>
        Стоп
      </button>
      <div>
        Тестовое сообщение:
        {message.map((oneMessage, index) => (
          <OneMessagePage key={index} oneMessage={oneMessage} />
        ))}
      </div>
    </div>
  );
}
