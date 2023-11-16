let eventTarget = document.getElementById('firstturtle');
let eventTarget2 = document.getElementById('secondturtle');
 function picturechange(){
 eventTarget.style.display = 'none';
 //event.target.style.border = 'pink';
 eventTarget2.style.display = 'block';
};
//eventTarget.addEventListener('click', picturechange);
eventTarget.onclick = picturechange;