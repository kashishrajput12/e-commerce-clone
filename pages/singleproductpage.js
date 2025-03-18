let MainImg = document.querySelector('#mainimg')
let SmallImg = document.querySelectorAll('.small-img img');
 SmallImg[0].onclick = function(){
    MainImg.src = '../img/products/f2.jpg';
 }
 SmallImg[1].onclick = function(){
    MainImg.src = SmallImg[1].src;
 }
 SmallImg[2].onclick = function(){
    MainImg.src = SmallImg[2].src;  
 }
 SmallImg[3].onclick = function(){ 
    MainImg.src= SmallImg[3].src;
 }