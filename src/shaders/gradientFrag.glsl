#version 300 es
precision highp float;
out vec4 fragColor;
in vec2 vTexCoord;

vec3 gradientStop(float t) {
  vec3 a = vec3(0.0, 0.0, 0.0);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);

  if (t < 0.5) return mix(a, b, t * 2.0);
  else return mix(b, c, (t - 0.5) * 2.0);
}

void main() {
  vec3 color = gradientStop(vTexCoord.x);
  fragColor = vec4(color, 1.0);
}
