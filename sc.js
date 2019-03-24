

//preLoad Background.
var jumbostronBg = document.getElementById('jumbostron-bg');
console.log(jumbostronBg);
var bg = document.createElement('img');
bg.onload = function(){
    jumbostronBg.style.backgroundImage = 'url(img/City-Background.jpg)';
    jumbostronBg.style.opacity = '1';
}
bg.src = 'img/City-Background.jpg';



//slider content;


var slides = document.querySelectorAll('#slider-content div');
console.log(slides);
var nextBtn = document.getElementById('next-btn');
var prevBtn = document.getElementById('prev-btn');
var curr =  0;


function displayCurrSlide(curr){
    slides.forEach( function(slide){
        slide.style.display = 'none';
        console.log("ok hidden");
    });
    slides[curr].style.display = 'block';
    console.log("show");
}

nextBtn.onclick = () =>{
    curr++;
    if(curr >= slides.length)
        curr = 0;
    console.log(curr);
    displayCurrSlide(curr);
    
}

prevBtn.onclick = () =>{
    curr--;
    if(curr < 0)
        curr = slides.length - 1;
    displayCurrSlide(curr);
   
}