/*slideshow*/
var slideIndex = 1;
var timer;

window.addEventListener("load", function()
{
  showSlides(slideIndex);
  timer = setInterval(function(){plusSlides(1)}, 4000);
})

function currentSlide(n)
{
  clearInterval(timer);
  timer = setInterval(function(){plusSlides(n+1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}   
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function plusSlides(n)
{
  clearInterval(timer);
  if(n < 0)
  {
    showSlides(slideIndex -= 1);
  }
  else
  {
    showSlides(slideIndex += 1);
  }
  if(n === -1)
  {
    timer = setInterval(function(){plusSlides(n + 2)}, 4000);
  }
  else
  {
    timer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}