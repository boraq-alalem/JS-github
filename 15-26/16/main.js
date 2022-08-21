let open = document.querySelector('.open');
let toggler = document.querySelector('.toggler');
let close = document.querySelector('.close');

open.onclick = () => {
    toggler.classList.add('show');
}

close.onclick = () => {
    toggler.classList.remove('show');
}
document.onkeydown = (e) => {
    e.key == 'Escape' ?
        toggler.classList.remove('show') :
        '';
}