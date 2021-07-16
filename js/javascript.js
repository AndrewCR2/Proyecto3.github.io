
let deseo1 =document.getElementById('deseo1');
let deseo2 =document.getElementById('deseo2');
let deseo3 =document.getElementById('deseo3');
let deseo4 =document.getElementById('deseo4');
let deseo5 =document.getElementById('deseo5');

function color(){
    deseo1.style.background="#1681c9";
}
function color1(){
    deseo2.style.background="#1681c9";
}
function color2(){
    deseo3.style.background="#1681c9";
}
function color3(){
    deseo4.style.background="#1681c9";
}
function color4(){
    deseo5.style.background="#1681c9";
}

deseo1.addEventListener("click",color);
deseo2.addEventListener("click",color1);
deseo3.addEventListener("click",color2);
deseo4.addEventListener("click",color3);
deseo5.addEventListener("click",color4);


