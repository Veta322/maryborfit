const slideDiplom = document.querySelectorAll('.diploma__image');
const leftDiplom = document.querySelector('.diploma__left');
const rightDiplom = document.querySelector('.diploma__right');



let slideIndexDiplom = 1;
showSlidesDiplom(slideIndexDiplom);


function showSlidesDiplom(n) {
if (n > slideDiplom.length) {
  slideIndexDiplom = 1;
}
if (n < 1) {
  slideIndexDiplom = slideDiplom.length;
}

slideDiplom.forEach((item) => item.style.display = 'none');


slideDiplom[slideIndexDiplom - 1].style.display = 'block';

}

function  plusSlideDiplom(n) {
showSlidesDiplom(slideIndexDiplom += n);
}
function currentSlideDiplom(n) {
showSlidesDiplom(slideIndexDiplom = n);
}
 leftDiplom.addEventListener('click', function() {
 plusSlideDiplom(-1);
});

rightDiplom.addEventListener('click', function() {
 plusSlideDiplom(1);
});



document.getElementById("header__link_contact").onclick = function () {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"});
}

document.getElementById("header__link_reviews").onclick = function () {
  document.getElementById("reviews").scrollIntoView({behavior: "smooth"});
}
