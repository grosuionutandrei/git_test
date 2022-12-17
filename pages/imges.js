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

const  makeCounter = ()=>{
   let counter = 0 ;
   return ()=>{
           return counter++;
      } 
   }


let count1 = makeCounter();
let count2 = makeCounter();


console.log(count1());
console.log(count1());
console.log(count2());
let canvas = document.getElementById("myCanvas");
let house = document.getElementById("house");
let fence = document.getElementById('fence');
let fenceRoof = document.getElementById("fenceRoof");

// sun
function createCanvas(elem){
  let ctx=elem.getContext("2d");
  
  ctx.beginPath();
   
  ctx.arc(100,50,50,0,2 *Math.PI);
  ctx.fillStyle="yellow";

  ctx.fill();
  ctx.stroke();
}

// create house
function drawHouse(elem){
   let ctx2=elem.getContext("2d");
   ctx2.lineWidth = 5;
    ctx2.fillStyle="grey";
// Wall
ctx2.strokeRect(100, 150, 150, 110);

// Door
ctx2.fillRect(155, 197, 40, 60);
//windows
ctx2.fillRect(120, 160, 20, 20);
ctx2.fillRect(210, 160, 20, 20);
// Roof
ctx2.beginPath();
ctx2.moveTo(80, 150);
ctx2.lineTo(170, 60);
ctx2.lineTo(270, 150);
ctx2.closePath();
ctx2.stroke();
}

//create fence

function createFence(elem){
   let ctx=elem.getContext('2d');
   ctx.lineWidth = 2;
   ctx.fillStyle="grey";
   // ctx.beginPath();

   ctx.moveTo(0,0);
   
   let length = 500;
   
 for(let i=0;i<=length;i+=20){
      if(i==120){
         ctx.fillStyle="blue";
         ctx.fillRect(i,0,58,100);
         ctx.fillStyle="grey";
        i+=60;
      }  
      
      ctx.fillRect(i,0,16,100);
   } 
   
 
}

// create fence roof 


function createFenceRoof(elem){
   let ctx = elem.getContext("2d");
    ctx.lineWidth=2;
    
   let width=500;
   let x = 8;
for(let i=0;i<=500;i+=20){
drawTriangle(ctx,x,i,"grey");
x+=20;
console.log(x);
}

}

function drawTriangle(creator,x,space,color){
  
  creator.beginPath();
  creator.moveTo(space,18);
  creator.lineTo(x,0);
  creator.lineTo((x+8),18);
  creator.closePath();
  creator.fillStyle=color;
  creator.fill();

}

createCanvas(canvas);
drawHouse(house);
createFence(fence);
createFenceRoof(fenceRoof);