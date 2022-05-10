#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {

    // convert texture to rgb values as vec3
    vec3 colors = texture(image, texcoord).rgb;

    // multiply and then divide each rgb value by 4
    colors = vec3(colors.x * 4.0, colors.y * 4.0, colors.z * 4.0);
    colors = vec3(((round(colors.x)) / 4.0), ((round(colors.y)) / 4.0), ((round(colors.z)) / 4.0));
    
    // add alpha back and assign to output
    vec4 toon = vec4(colors, 1.0);
    FragColor = toon;
}
