const heading = document.querySelector('#heading');

const keyframes = {
    opacity: [0, 1],
    translate:['0 50px', 0],
};
const options = {
    duration: 2000,
    easing: 'ease',
};

heading.animate(keyframes,options);