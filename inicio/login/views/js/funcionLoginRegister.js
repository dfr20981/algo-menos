 const toggleForm = () => {
      const container = document.querySelector('.container');
      container.classList.toggle('active');
    };

 function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
// const nextBtnThird = document.querySelector(".next-id");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".Submit1");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;



firstNextBtn.addEventListener("click", function (){
  slidePage.style.marginLeft = "-30%";
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
})
nextBtnSec.addEventListener("click", function (){
  slidePage.style.marginLeft = "-60%";
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
})
// nextBtnThird.addEventListener("click", function (){
//   slidePage.style.marginLeft = "-85%";
//   bullet[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   current += 1;
// })
submitBtn.addEventListener("click", function (){
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
  setTimeout(function (){
    alert("You´re successfully Signed up ♥");
    location.reload();
  }, 800)
})

prevBtnSec.addEventListener("click", function (){
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
})
prevBtnThird.addEventListener("click", function (){
  slidePage.style.marginLeft = "-30%";
  bullet[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
})
// prevBtnFourth.addEventListener("click", function (){
//   slidePage.style.marginLeft = "-50%";
//   bullet[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   current -= 1;
// })
