#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);
    vec2 barrel = 2.0 * texcoord - 1.0;
    float theta = atan(barrel.y, barrel.x);
    float radius = pow(length(barrel), 1.5);

    barrel.y = sin(theta) * radius;
    barrel.x = cos(theta) * radius;
    FragColor = texture(image, (barrel + 1.0) * .5); 
}
