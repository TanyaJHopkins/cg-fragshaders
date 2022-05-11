#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {

    // split image to rgb values
    vec3 colors = texture(image, texcoord).rgb;

    // calculate luminance from rgb values
    float lumy = colors.x * 0.299 + colors.y * 0.587 + colors.z * 0.114;
    
    // use luminance in tandem with 6 sections of gradual color shifts
    // (each of the 3 color values gets one increasing and one decreasing stage)
    // to create a rainbow effect

    // red static, blue decreasing
    if (texcoord.x < 0.1666666) {FragColor = vec4(lumy, 0.0, lumy * (6.0*(mod(texcoord.x, 0.1666666))), 1.0);}
    // blue static, red increasing
    else if (texcoord.x < 0.3333333) {FragColor = vec4(lumy * (-6.0*(mod(texcoord.x, 0.1666666))+1.0), 0.0, lumy, 1.0);}
    // blue static, green decreasing
    else if (texcoord.x < 0.5) {FragColor = vec4(0.0, lumy * (6.0*(mod(texcoord.x, 0.1666666))), lumy, 1.0);}
    // green static, blue increasing
    else if (texcoord.x < 0.6666666) {FragColor = vec4(0.0, lumy, lumy * (-6.0*(mod(texcoord.x, 0.1666666))+1.0), 1.0);}
    // green static, red decreasing
    else if (texcoord.x < 0.8333333) {FragColor = vec4(lumy * (6.0*(mod(texcoord.x, 0.1666666))), lumy, 0.0, 1.0);}
    // red static, green increasing
    else {FragColor = vec4(lumy, lumy * (-6.0*(mod(texcoord.x, 0.1666666))+1.0), 0.0, 1.0);}

}
