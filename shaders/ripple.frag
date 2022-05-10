#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {

    vec2 texcoordy = texcoord;

    // scale and translate the texture coordinate such that it is in the range [-1.0, 1.0]
    // (multiply by 2, then subtract 1)
    texcoordy = (texcoordy * 2.0);
    texcoordy = (texcoordy - 1.0);
    

    // calculate radius = magnitude of texture coordinate
    float radius = length(texcoordy);

    // calculate a texture coordinate offset = texture_coordinate * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0
    vec2 texcoordy_offset = texcoordy * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    
    // calculate final texture coordinate = original_texture_coordinate + texture_coordinate_offset
    FragColor = texture(image, texcoord + texcoordy_offset);
}
