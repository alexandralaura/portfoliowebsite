let eventTarget = document.getElementById('firstturtle');
let eventTarget2 = document.getElementById('secondturtle');
 function picturechange(){
 eventTarget.style.display = 'none';
 //event.target.style.border = 'pink';
 eventTarget2.style.display = 'block';
};
//eventTarget.addEventListener('click', picturechange);
eventTarget.onclick = picturechange;
let howdy = document.getElementById('getthis');
function howdychange() {
    //howdy.style.transform = 'rotate(45)';
    howdy.style.backgroundColor = 'purple';
}
howdy.addEventListener('click', howdychange);
let paragraph = document.getElementById('helloworld');
function hellochange () {
    paragraph.style.fontFamily = "helvetica";
    paragraph.style.lineHeight = "2";
}
paragraph.addEventListener('mouseover', hellochange);