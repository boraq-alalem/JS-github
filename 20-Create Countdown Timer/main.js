let targetDate = new Date('dec 31,2022 23:59:59').getTime();

let cout = setInterval((e)=>{
    let currentDate = new Date().getTime();
    let diffrinteDate = targetDate - currentDate;
    
    let days = Math.trunc(diffrinteDate/(1000*60*60*24));
    let hours = Math.trunc((diffrinteDate%(1000*60*60*24))/(1000*60*60));
    let min = Math.trunc((diffrinteDate%(1000*60*60))/(1000*60));
    let sec = Math.trunc((diffrinteDate%(1000*60))/(1000));
    
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.min').innerHTML = min;
    document.querySelector('.sec').innerHTML = sec;

},1000)