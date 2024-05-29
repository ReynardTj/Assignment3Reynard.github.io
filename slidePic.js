const picSlide = document.querySelectorAll('.pic');
var curIndex = 0;


function swipeLeft() {
  picSlide[curIndex].classList.remove("left","right");
  curIndex = curIndex - 1

  if (curIndex < 0){
    curIndex = 2;
  }

  picSlide[curIndex].classList.add("left"); 

}

function swipeRight() {
  picSlide[curIndex].classList.remove("left","right");
  curIndex = curIndex + 1

  if (curIndex > 2){
    curIndex = 0;
  }

  picSlide[curIndex].classList.add("right"); 

}

leftBut = document.getElementById("prev");
leftBut.addEventListener("click", swipeLeft);

rightBut = document.getElementById("next");
rightBut.addEventListener("click", swipeRight);
