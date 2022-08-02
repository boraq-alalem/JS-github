let ul = document.querySelector('.tabs');

let li = document.querySelectorAll('.tabs li');

let content = document.querySelectorAll('.content div');

for (let i = 0; i < li.length; i++) {
    li[i].onclick=()=>{
        for (let j = 0; j < content.length; j++) {
            content[j].style.display= 'none';
            li[j].classList.remove('active');
        }
        content[i].style.display= 'block';
        li[i].classList.add('active');
    }  
}