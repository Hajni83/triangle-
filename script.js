$(function(){
canvas=document.getElementById('MyCanvas');
context=canvas.getContext('2d');

function triangle(x,y,a) {
    context.moveTo(x+a/2,y);
    context.lineTo(x-a/2,y);
    context.lineTo(x, y-(Math.sqrt(Math.pow(a,2)-Math.pow(a/2,2))));
    context.lineTo(x+a/2, y);
}

triangle(230,260,50);
triangle(270,250,50);
triangle(200,150,150);
context.stroke();
});