let rand = '0123456789BC, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Z';
rand = rand.split(', ').map((el)=>{return el}).join('');
let count = 4;
let pass;
let currentNumber;

let generate = document.querySelector('.generate')
let serial = document.querySelector('.serial')

generate.onclick = () => {
    serial.innerHTML = '';
    for (let i = 0; i < count; i++) {
        currentNumber = Math.trunc(Math.random() * rand.length);
        serial.innerHTML += rand[currentNumber];
    }

    
}