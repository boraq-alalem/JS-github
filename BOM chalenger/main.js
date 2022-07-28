let form = document.querySelector('.form');
let input = document.querySelector('.input');
let add = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

let i = -1; 
let ar =[];

// chek the localStorage
check();
function check(){
    if(window.localStorage.tasks && window.localStorage.tasks !='[]'){
        ar=JSON.parse(window.localStorage.tasks);
        i= ar[ar.length -1].id;
    }else{
        ar = [];
        i=-1;
    }
}

// when you open the page
for (let i = 0; i < ar.length; i++) {
    // called the show function
      show(ar[i].name,ar[i].id);
}

// add new task
add.onclick=()=>{
    // call check function
    check();

    let name = input.value;
    i += 1;
    
    let addTasks = {
        id:i,
        name:name
    };

    ar.push(addTasks);
    window.localStorage.tasks = JSON.stringify(ar);
    window.localStorage.count = i;
    
    show(input.value,i);

};

// show function
function show(title,id){
    let dad = document.createElement('div');
    dad.classList.add('dad');
    dad.setAttribute('data-id',`${id}`)

    let lable = document.createElement('label');
    lable.classList.add('title');
    let labelText = document.createTextNode(`${title}`);
    lable.append(labelText);

    let btn = document.createElement('button');
    btn.classList.add('delet');
    btn.classList.add('btn');
    let btnText = document.createTextNode(`delete ${id}`);
    btn.append(btnText);

    dad.append(lable);
    dad.append(btn);
    tasks.append(dad);

};

// delete function
document.addEventListener('click',function(e){
    if(e.target.classList.contains('delet')){
        let deleteArrey = [];
        let ar = JSON.parse(window.localStorage.tasks);
        for (let i = 0; i < ar.length; i++) {
            if(ar[i].id == e.target.parentElement.getAttribute('data-id')){
                    continue;
                }
                    deleteArrey.push(ar[i]);      
        }
        ar = deleteArrey;

        window.localStorage.tasks = JSON.stringify(ar);
        // location.reload();
        $('.tasks').empty();
        for (let i = 0; i < ar.length; i++) {
            // called the show function
              show(ar[i].name,ar[i].id);
        }
    }
})