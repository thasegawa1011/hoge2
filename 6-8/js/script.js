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

const heading2 = document.querySelector('#heading2');
const keyframes2 = {
//    opacity: [0, 1],
//    translate:['0 100px', 0],
//    rotate: ['x 360deg', 0],
    color:['#f66','#fc2','#0c6','#0bd']
};
const options2 = {
    duration: 8000,
    direction: 'alternate'
    iterarions: Infinity,
};

heading2.animate(keyframes2,options2);