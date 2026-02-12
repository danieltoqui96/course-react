import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  // change coultdown
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  // change light
  useEffect(() => {
    if (countdown > -1) return;

    if (light === "red") {
      setLight("green");
      setCountdown(5);
      return;
    }

    if (light === "yellow") {
      setLight("red");
      setCountdown(5);
      return;
    }

    if (light === "green") {
      setLight("yellow");
      setCountdown(2);
      return;
    }
  }, [countdown, light]);

  return {
    // Props
    countdown,

    // Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",

    // Methods
  };
};
