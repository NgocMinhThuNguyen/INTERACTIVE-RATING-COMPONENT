const ratings = document.querySelectorAll(".rating button");
const submitBtn = document.querySelector('.call-to-action');
const thankYou = document.querySelector('.thankyou-state');
let userRating = '';


for (let i=0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', event => {
    event.preventDefault();
    
    userRating = ratings[i].innerHTML;
  })
}

submitBtn.addEventListener('click', () => {
  let selectedRating = document.querySelector("span").innerText = userRating;
  thankYou.classList.add('after');
});
