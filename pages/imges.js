let container = document.getElementById("imagini");
console.log(container);
let frag = document.createDocumentFragment();
let images = ['gif','jpg','png','svg'];
let root='mochi';

for(img of images){
let newImage = document.createElement('img');
   newImage.setAttribute("src",`../images/images/${root}.${img}`);
   frag.appendChild(newImage);
}
container.appendChild(frag);

