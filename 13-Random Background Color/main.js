let bgColor = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
let count = 6;

randomBgcolor();

// document.querySelector('body').style.background = bgColor[rand];

function randomBgcolor(){
    let currentColor ='#' ;
    for (let i = 0; i < count; i++) {
        let rand = Math.trunc(Math.random() * bgColor.length);
        currentColor += bgColor[rand];
    }
    console.log(currentColor);
    document.querySelector('body').style.background = currentColor;
}
