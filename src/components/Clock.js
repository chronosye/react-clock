import { useState, useEffect } from "react";
import classes from "./Clock.module.scss";

const Clock = () => {
  const getDate = () => {
    return new Date().toLocaleTimeString("lv-LV", { hour12: false });
  };

  const [time, setTime] = useState(getDate());

  useEffect(() => {
    setInterval(() => {
      setTime(getDate());
    }, 1000);
  }, []);

  return (
    <div>
      <div className={classes.clock}>
        <p>{time}</p>
      </div>
      <div className={classes.clockBackground}>
        <p>88:88:88</p>
      </div>
    </div>
  );
};

export default Clock;
