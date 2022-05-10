#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {

    // STILL BROKEY

    vec2 texcoordy = texcoord;

    // scale and translate the texture coordinate such that it is in the range [-1.0, 1.0] 
    // (multiply by 2 then subtract 1)
    texcoordy = (texcoordy * 2.0);
    texcoordy = (texcoordy - 1.0);

    // calculate theta = arctan(texture_coordinate_y, texture_coordinate_x)
    float theta = atan(texcoordy.y, texcoordy.x);

    // calculate radius = magnitude of texture coordinate, raised to the power of 1.5
    float radius = length(texcoordy);
    radius = pow(radius, 1.5);

    // calculate final texture coordinate = (radius * cos(theta),  radius * sin(theta))
    texcoordy = vec2(radius * cos(theta), radius * sin(theta));

    texcoordy = (texcoordy + 1.0);
    texcoordy = (texcoordy * 0.5);

    FragColor = texture(image, texcoordy);
}
