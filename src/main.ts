import p5 from "p5";
import { sketch } from "./sketch";
import "./style.css";

const main = () => {
  const container = document.getElementById("main");
  if (!container) {
    console.error("Canvas element not found");
    return;
  }

  new p5(sketch, container);
};

main();
