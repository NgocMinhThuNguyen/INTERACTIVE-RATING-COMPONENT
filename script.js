const ratings = document.querySelectorAll(".rating button");
const userRating = '';

for (let i=0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', event => {
    event.preventDefault();

    console.log(ratings[i].innerHTML);
  })
}