const ratings = document.querySelectorAll(".rating button");
const submitBtn = document.querySelector('.submit');
const thankYou = document.querySelector('.thankyou-state');
let userRating = '';


for (let i=0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', event => {
    event.preventDefault();

    userRating = ratings[i].innerHTML;
  })
}

submitBtn.addEventListener('click', () => {
  let selectedRating = document.querySelector("span");

  if (userRating === '') {
    selectedRating.innerText = '0';
  } else {
    selectedRating.innerText = userRating;
  }
  thankYou.classList.add('after');
});
