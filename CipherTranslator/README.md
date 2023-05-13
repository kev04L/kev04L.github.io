# kevin-cypher



## Upload image of writing and process it

Use the [Sobel operator](https://en.wikipedia.org/wiki/Sobel_operator) through [convolution](https://en.wikipedia.org/wiki/Kernel_(image_processing)#Convolution) to determine the strength ([gradient magnitude](https://en.wikipedia.org/wiki/Sobel_operator#:~:text=to%20give%20the-,gradient%20magnitude,-%2C%20using%3A)) and direction ([atan2](https://en.wikipedia.org/wiki/Sobel_operator#:~:text=gradient%27s%20direction)) of the gradient in the image. 

Identify the edge of the character through one of two methods:

1. Identify high magnitude gradients
2. Pathfind along the edge by bouncing back and forth from black to white.

and store the directions in some sort of list. When the direction shifts drastically, we have run into a defining feature in the character, such as a mark or dash.
