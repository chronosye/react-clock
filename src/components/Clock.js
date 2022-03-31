import { useState, useEffect } from "react";
import classes from "./Clock.module.scss";

const Clock = () => {
  const getTime = () => {
    return new Date().toLocaleTimeString("lv-LV", { hour12: false });
  };

  const getDate = () => {
    const date = new Date().toLocaleString("default", {
      day: "numeric",
      month: "long",
    });

    return date;
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  return (
    <div className={classes.all}>
      <div className={classes.date}>
        <p>{getDate()}</p>
      </div>
      <div className={classes.clockDiv}>
        <div className={classes.clock}>
          <p>{time}</p>
        </div>
        <div className={classes.clockBackground}>
          <p>88:88:88</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
