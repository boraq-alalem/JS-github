let spans = document.querySelectorAll('.progres span');
let three = document.querySelector('.three');


window.onscroll=()=>{
    if (window.scrollY >= (three.offsetTop - 100)) {
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        });

    } 
}