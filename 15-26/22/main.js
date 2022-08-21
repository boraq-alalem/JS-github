let three = document.querySelector('.three');
let brog = document.querySelectorAll('.brogres span');

window.onscroll=()=>{
    if (window.scrollY >= three.offsetTop -100) {
        fullBrog();
    }
}

function fullBrog(){
    brog.forEach(li => {
        let gold = li.dataset.width;
        let current = 0;
        let count = setInterval(() => {
            current++;
            if (current == gold) {
                clearInterval(count)
            }
            li.style.width = `${current}%`;
        }, 2000 / gold);
    
    });
}