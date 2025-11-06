const heading1 = document.querySelector('#heading1');
const keyframes1 = {
    opacity1: [0, 1],
    rotate: ['x 360deg', 0],
};
const options1 = {
    duration: 2000,
    easing: 'ease',
};
heading.animate(keyframes1,options1);

const heading2 = document.querySelector('#heading2');
const keyframes2 = {
    color:['#f66','#fc2','#0c6','#0bd']
};
const options2 = {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
};
heading2.animate(keyframes2,options2);


const heading3 = document.querySelector('#heading3');
const keyframes3 = {
    color:['transparent','#fff'],
    backgroundPosition:['100% 0', '0 0'],
};
const options3 = {
    duration: 1000,
    easing: 'ease',
};
heading3.animate(keyframes3,options3);