#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 LuminanceRGB = texture(image, texcoord);
    FragColor = vec4(vec3(0.299 * LuminanceRGB.r + 0.587 * LuminanceRGB.g + 0.114 * LuminanceRGB.b), 1.0);
}
