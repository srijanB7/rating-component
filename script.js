const form = document.querySelector('.form');
const ratingDispay = document.querySelector('.thank-you');
const ratings = document.querySelectorAll('.rating');
const msg = document.querySelector('.rating-msg');

let rating;

console.log("hello");
ratings.forEach(element => {
    element.addEventListener('click', () => {
        for(let i = 0; i < 5; i++) {
            const list = ratings[i].classList;
            if(list.contains('btn-selected')) {
                list.remove('btn-selected');
            }
        }
        const list = element.classList;
        list.add('btn-selected')
        rating = element.value;
        console.log(element.value)
    })
});
//console.log(ratings)
//console.log(rating);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(rating === undefined) {
        alert("select rating");
    }
    else {
        form.style.display="none";
        ratingDispay.style.display="block"
        console.log("rating", rating)
        msg.textContent = `You selected ${rating} out of 5`
    }
})

