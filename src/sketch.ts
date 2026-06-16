import p5 from "p5";
import vertShader from "./shaders/gradientVert.glsl?raw";
import fragShader from "./shaders/gradientFrag.glsl?raw";
//@ts-ignore
import { resolveLygia } from "resolve-lygia";

export const sketch = (p: p5) => {
  let gradientShader: p5.Shader;

  p.setup = () => {
    p.setAttributes("version", 2);
    p.createCanvas(1200, 1200, p.WEBGL);
    gradientShader = p.createShader(resolveLygia(vertShader), resolveLygia(fragShader));
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255);

    p.shader(gradientShader);
    p.rect(-p.width / 2, -p.height / 2, p.width, p.height);
  };
};
