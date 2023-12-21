import { useState } from "react";

export const useBackGroundColor = () => {
  const [randomColor, setRandomColor] = useState<string>("");
  const onChangeColor = () => {
    const newColor = randomRGB;
    setRandomColor(newColor);
  };

  const randomRGB = () => {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);

    return `rgb(${rColor},${gColor},${bColor})`;
  };

  const getRandomColor = () => {
    return randomColor;
  };
  return {
    onChangeColor,
    getRandomColor,
  };
};
