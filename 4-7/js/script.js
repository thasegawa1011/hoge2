const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventLidtener('keyup', () => {
    count.textContent = text.ariaValueMax.length;

    if(text.ariaValueMax.length >100){
        count.classList.add('alert');
    }
    else{
        count.classList.remove('alart');
    }
});