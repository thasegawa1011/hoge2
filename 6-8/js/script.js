const heading = document.querySelector('#heading');

const keyframes = {
    opacity: [0, 1],
//    translate:['0 100px', 0],
    rotate: ['x 360deg', 0],
};
const options = {
    duration: 2000,
    easing: 'ease',
};

heading.animate(keyframes,options);