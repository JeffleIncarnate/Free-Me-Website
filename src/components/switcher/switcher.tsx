import "./switcher.css";

import { FC, useEffect, useState } from "react";

interface IProps {}

const Switcher: FC<IProps> = ({}) => {
  const [mode, setMode] = useState<string>("dark");

  useEffect(() => {
    const time = new Date().getHours();

    // Just for me 😀😀😀😀
    if (localStorage.getItem("among") === "us") {
      return setMode("dark");
    }

    if (time < 18 && time > 9) {
      setMode("light");
    } else {
      setMode("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);

    if (mode === "dark") {
      document.documentElement.style.setProperty("--white", "#faf9f6");
      document.documentElement.style.setProperty("--black", "#181818");
      document.documentElement.style.setProperty("--background", "0, 0, 0");
      document.documentElement.style.setProperty("--whiteRGB", "250, 249, 246");
      document.documentElement.style.setProperty("--blackRGB", "24, 24, 24");
    } else {
      document.documentElement.style.setProperty("--white", "#181818");
      document.documentElement.style.setProperty("--black", "#faf9f6");
      document.documentElement.style.setProperty(
        "--background",
        "200, 200, 200"
      );
      document.documentElement.style.setProperty("--whiteRGB", "24,24,24");
      document.documentElement.style.setProperty("--blackRGB", "250, 249, 246");
    }
  }, [mode]);

  const changeModeHandler = () => {
    setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  };

  return (
    <section className="Switcher" onClick={changeModeHandler}>
      {mode === "dark" ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </section>
  );
};

export default Switcher;
