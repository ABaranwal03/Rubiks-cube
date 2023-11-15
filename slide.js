const images = [
   'Rubiks/Rubiks-1.jpeg',
   'Rubiks/Rubiks-2.jpeg',
   'Rubiks/Rubiks-3.jpeg',
   'Rubiks/Rubiks-4.jpeg',
   'Rubiks/Rubiks-5.jpeg',
   'Rubiks/Rubiks-6.webp',
   'Rubiks/Rubiks-7.webp',
   'Rubiks/Rubiks-8.webp',
   'Rubiks/Rubiks-9.webp',
   'Rubiks/Rubiks-10.webp',
   'Rubiks/Rubiks-11.webp',
   'Rubiks/Rubiks-12.webp',
   'Rubiks/Rubiks-13.webp',
   'Rubiks/Rubiks-14.webp'
];
// let rubik1 = "Identify the pieces. Before you start playing Rubik's Cube, identify the different pieces of it.";
// let rubik2 = "Identify the center pieces. On each side of your Cube are center pieces, which have only one color on them. The colors are either red, blue, white, yellow, green, or orange";
// let rubik3 = "Identify the logo piece. On your Cube, the logo piece is one color, usually white, and has the Rubik's Cube logo on it.";
// let rubik4 = "Identify the edge pieces. On your Cube, each edge pieces have two different colors.These are often the last pieces of each layer that you will solve.There are a total of twelve edge pieces on a Rubik's Cube. ";
// let rubik5 = "Identify the corner pieces. On your Cube, the corner pieces have three different colors. There are a total of eight corner pieces.";
// let rubik6 = "Position your Rubik's Cube with the white center logo piece facing up. As you prepare to solve your Rubik's Cube, it's important to have this piece with the logo facing upwards. This will make it easier to solve each layer of the puzzle.";
// let rubik7 = "Make a white cross across the top. With the center white logo piece facing up, position the pieces into the shape of a white cross. ";
// let rubik8 = "Solve the white corners. After you've created your white cross on the top face of the Rubik's Cube and positioned the edge pieces properly, you're ready to solve the white corners.";
// let rubik9 = "Position Rubik's Cube with white cross on the bottom. In order to properly solve the middle layer, position the completed white side on the bottom.";
// let rubik10 = "Position edge pieces. By putting the edge pieces into position on the middle layer first, you'll more easily be able to position the rest of the layer.";
// let rubik11 = " Follow the above steps until the edge pieces are in the correct position. At this point, the middle layer should be finished so that you can move on to solving the final layer.";
// let rubik12 = "Position Rubik's cube with yellow-patterned side facing up. At this stage, you'll have a yellow pattern on one face of your Cube.";
// let rubik13 = "Make a yellow cross. Just like you did with the white face, position the yellow pieces into a cross.";
// let rubik14 = "Make the corners yellow. You're now ready to position the final pieces of your Rubiks cube by making the remaining corners on this layer yellow.";

const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () =>{
    const imageTag = document.getElementById('image');
    currentImage++;
    if(currentImage >= lastImage){
        currentImage = 13;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage +1) + '/14';

});

// previous
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click' , ()=> {
    const imageTag = document.getElementById('image');
    currentImage--;
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/14';

})



