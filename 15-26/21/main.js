let three = document.querySelector('.three');
let nums = document.querySelectorAll('.contianer div');
let started = false;

window.onscroll=()=>{
    if(window.scrollY >= (three.offsetTop - 200) && !started){
        turnCount();
        started = true;
    }
}

function turnCount(){
    nums.forEach(num => {
        let gold = num.dataset.count;

            let count = setInterval(() => {
                num.textContent++;
                if (num.textContent == gold) {
                    clearInterval(count)
                }
            }, 2000 / gold);
        
    });
}
