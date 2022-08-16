let count = document.querySelector('.count');
let input = document.querySelector('.input');
let borders = document.querySelector('.borders');

let maxLength = input.getAttribute('maxlength');
count.innerHTML = maxLength;

input.oninput=()=>{
    count.innerHTML = maxLength - input.value.length;
    borders.style.width = `${(input.value.length * 100)/maxLength}%`;
}