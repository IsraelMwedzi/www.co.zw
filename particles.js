/* ==========================================
   VELOXA - particles.js
   Animated Background System
========================================== */


const canvas = document.createElement("canvas");

const particlesContainer = document.getElementById("particles-js");

if(particlesContainer){

particlesContainer.appendChild(canvas);

}

const ctx = canvas.getContext("2d");

let particles=[];


// Canvas Size

function resizeCanvas(){

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);


// Particle Settings

const particleCount = 90;


// Particle Object

class Particle{

constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.size=Math.random()*3+1;

this.speedX=(Math.random()-.5)*1;

this.speedY=(Math.random()-.5)*1;

this.opacity=Math.random();

}


update(){

this.x+=this.speedX;

this.y+=this.speedY;


// Screen looping

if(this.x<0 || this.x>canvas.width){

this.speedX*=-1;

}


if(this.y<0 || this.y>canvas.height){

this.speedY*=-1;

}

}


draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);


ctx.fillStyle=
`rgba(80,200,255,${this.opacity})`;

ctx.fill();

}


}



// Create particles

function createParticles(){

particles=[];

for(let i=0;i<particleCount;i++){

particles.push(new Particle());

}

}


createParticles();



// Connect Particles

function connectParticles(){

for(let a=0;a<particles.length;a++){

for(let b=a;b<particles.length;b++){


const distance=

Math.sqrt(

Math.pow(
particles[a].x-particles[b].x,
2
)

+

Math.pow(
particles[a].y-particles[b].y,
2
)

);



if(distance<120){


ctx.beginPath();


ctx.strokeStyle=
`rgba(0,170,255,
${1-distance/120})`;


ctx.lineWidth=.5;


ctx.moveTo(
particles[a].x,
particles[a].y
);


ctx.lineTo(
particles[b].x,
particles[b].y
);


ctx.stroke();


}


}

}

}



// Animation Loop

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


particles.forEach(p=>{

p.update();

p.draw();

});


connectParticles();


requestAnimationFrame(
animateParticles
);


}


animateParticles();



// Mouse Interaction

let mouse={

x:null,

y:null

};


window.addEventListener(
"mousemove",
(e)=>{

mouse.x=e.clientX;

mouse.y=e.clientY;

}

);



function mouseEffect(){

particles.forEach(p=>{


if(mouse.x && mouse.y){


let dx=p.x-mouse.x;

let dy=p.y-mouse.y;


let distance=Math.sqrt(
dx*dx+dy*dy
);



if(distance<120){

p.x+=dx/30;

p.y+=dy/30;

}


}


});


}


setInterval(
mouseEffect,
50
);
