let open = document.querySelector('.open')
let close = document.querySelector('.close')
let toggler = document.querySelector('.toggler')
open.onclick =()=>{
    toggler.classList.add('show')
}
close.onclick =()=>{
    toggler.classList.remove('show')
}