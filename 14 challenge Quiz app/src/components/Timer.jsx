import React, { useEffect, useState } from "react";

const Timer = ({setIsOver}) => {
  const [leftTime, setLeftTime] = useState(300);
  const [displayTime , setDisplayTime] = useState('')

  //left time logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // time format logic
  useEffect(() => {
    if(leftTime === 0){
      setIsOver(true);
    }
    let formatedTime = (
      `${Math.floor(leftTime / 60)
        .toString()
        .padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, 0)}`
    );
    setDisplayTime(formatedTime)
  }, [leftTime]);

  return (
    <div>
      <div className="text-[20px]">🕜 Time Left: {displayTime}</div>
    </div>
  );
};

export default Timer;
