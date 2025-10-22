const isAgreed = document.querySelector('#check');
const btn =document.querySelector('#btn');

isAgreed.addEventListener('change', () =>{
    btn.disabled = !isAgreed.ariaChecked;
});