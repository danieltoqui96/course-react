// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithhook";
// import { PokemonPage } from "./03-examples/PokemonPage";
// import { FocusScreen } from "./useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import { ScrambleWords } from "./05-useReducer/ScrambleWordReduce";
// import { MemoHook } from "./06-memos/MemoHook";
// import { MemoCounter } from "./06-memos/MemoCounter";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    <InstagromApp />
  </>,
);
