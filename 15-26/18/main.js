let input = document.querySelector('.input');
let line = document.querySelector('.line');
let count = document.querySelector('.count');

let maxLength = input.getAttribute('maxlength');
count.textContent =  maxLength ;

input.oninput=()=>{
    let current = input.value.length;
    count.textContent =  maxLength - current;
    
    line.style.width = `${(current * 100 )/maxLength}%`;
}