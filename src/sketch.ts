import p5 from "p5";

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(1200, 1200, p.WEBGL);
  };

  p.draw = () => {
    // Draw full-screen quad
    p.noStroke();
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(0, 0, p.width, p.height);
  };
};
