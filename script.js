// FADE IN / OUT MESSAGES

const messages=document.querySelectorAll(".fade-message");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("visible");
}else{
entry.target.classList.remove("visible");
}

});

},{threshold:.3});

messages.forEach(msg=>observer.observe(msg));


// HEARTS ON CLICK

document.addEventListener("click",e=>{

let heart=document.createElement("div");
heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.fontSize="24px";

document.body.appendChild(heart);

heart.animate([
{transform:"translateY(0)",opacity:1},
{transform:"translateY(-120px)",opacity:0}
],{duration:1200});

setTimeout(()=>heart.remove(),1200);

});


// FALLING PETALS

for(let i=0;i<30;i++){

let petal=document.createElement("div");
petal.innerHTML="🌸";

petal.style.position="fixed";
petal.style.left=Math.random()*window.innerWidth+"px";
petal.style.top=Math.random()*window.innerHeight+"px";
petal.style.fontSize=(Math.random()*25+15)+"px";

document.body.appendChild(petal);

animatePetal(petal);

}

function animatePetal(el){

let x=0;

function move(){

let y=parseInt(el.style.top);

el.style.top=(y+1+Math.random()*2)+"px";
el.style.left=(parseInt(el.style.left)+Math.sin(x)*1.5)+"px";

x+=0.01;

if(parseInt(el.style.top)>window.innerHeight){
el.style.top="-50px";
}

requestAnimationFrame(move);

}

move();

}