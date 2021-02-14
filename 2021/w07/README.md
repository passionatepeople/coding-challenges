Write function that takes 3 arguments - integer value for red, green and blue and transforms it to corresponding hex string in the form of
##RRGGBB. The input values are truncated to the range of 0-255, e.g. negative values become 0 and values >= 255 are truncated to 255.

Note: The answer should always be 7 characters long, the shorthand form #FFF is not required.

Examples:

rgb2Hex(255, 255, 255) // returns '#FFFFFF'
rgb2Hex(255, 255, 300) // returns '#FFFFFF'
rgb2Hex(0,0,0) // returns '#000000'
rgb2Hex(-20,0,0) // returns '#000000'
rgb2Hex(77, 22, 159) // returns '#4D169F'


