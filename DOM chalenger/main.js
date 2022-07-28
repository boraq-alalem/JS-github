let body = document.querySelector('body');

let header = document.createElement('header');
header.classList.add('header');
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
`;

let logo = document.createElement('div');
logo.classList.add('logo');
let logoText = document.createTextNode('elzero');
logo.append(logoText);
logo.style.cssText = `
text-transform: capitalize;
color: green;
font-size: 1.5em;
font-weight: bolder;
`;

let ul = document.createElement('ul');
ul.classList.add('menu');
ul.style.cssText = `
    display: flex;
    gap: 10px;
    text-transform: capitalize;
    color: #333;
`;

let menu = ['home','about','service','contact'];
for( let i=0 ; i<menu.length ; i++){
    let li = document.createElement('li');
    let liText = document.createTextNode(`${n=menu[i]}`);
    li.append(liText);
    ul.append(li);
}
header.append(logo);
header.append(ul);
body.prepend(header);

// ----//////////////////////////////////////////////////////////////////////

let contact = document.createElement('div');
contact.classList.add('contact');

contact.style.cssText=`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background: #cecccf;
padding: 20px;
gap:20px;
`;

for (let i=0 ; i<15 ;i++){
    let prodcut = document.createElement('div');
    prodcut.classList.add('prodcut');
    prodcut.style.cssText = `
    background: white;
    padding: 20px;
    text-align: center;
    color: #333;
    font-size: 0.85em;
    display: grid;
    gap: 5px;
    `;
    
    let prodcutText = document.createTextNode('prodcut');
    prodcut.append(prodcutText);
    
    
    let span = document.createElement('span');
    let spanText = document.createTextNode(`${i+1}`);
    span.append(spanText);
    span.style.cssText=`
        font-size: 2.3em;
        font-weight: bolder;
        color:black;
        `;
        
        prodcutText.before(span);
        contact.append(prodcut);
    }
header.after(contact);
    
// ----//////////////////////////////////////////////////////////////////////

let footer = document.createElement('footer');
let footerText = document.createTextNode('copyright 2021');
footer.append(footerText);
contact.after(footer);
footer.style.cssText=`
    background: #317631;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 1.4em;
    text-transform: capitalize;
    `;