#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {

    // split image to rgb values
    vec3 colors = texture(image, texcoord).rgb;

    // calculate luminance from rgb values
    float lumy = colors.x * 0.299 + colors.y * 0.587 + colors.z * 0.114;

    // replace color values with calculated luminance and add alpha back
    FragColor = vec4(lumy, lumy, lumy, 1.0);
}
