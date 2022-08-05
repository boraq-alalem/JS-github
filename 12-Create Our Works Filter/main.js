let item = document.querySelectorAll('.content div');
let cat = document.querySelectorAll('.tabs li');

console.log(item[0].dataset.color);

item.forEach(ele => {
    ele.style.background = `${ele.dataset.color}`;
});

// this is my start code alalem. -----------------------------------------------------

// cat.forEach(ele => {
//     ele.addEventListener('click', function () {
//         let filter = ele.dataset.cat;
//         cat.forEach(ele => {
//             ele.classList.remove('active');
//         });
//         this.classList.add('active');
//         item.forEach(ele => {
//             ele.classList.contains(`${filter}`) ?
//                 ele.style.display = 'grid' :
//                 ele.style.display = 'none';
//         });
//     })
// });

// this is my end code alalem. -----------------------------------------------------

cat.forEach(ele => {
    ele.addEventListener('click',activeClass);
    ele.addEventListener('click',currentItem);
});

function activeClass(){
    cat.forEach(ele => {
        ele.classList.remove('active');
    });
    this.classList.add('active');
}

function currentItem(){
    item.forEach(ele => {
        ele.style.display = 'none';
    });
    document.querySelectorAll(`.${this.dataset.cat}`).forEach(ele=>{
        ele.style.display = 'grid';
    })
}