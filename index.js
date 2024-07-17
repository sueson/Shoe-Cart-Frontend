

//script for trending products caurosel.

const trendsList = document.getElementById('trends_list');
const leftBtn = document.querySelector('.carousel_left_btn');
const rightBtn = document.querySelector('.carousel_right_btn');

const container = trendsList.getBoundingClientRect();
const containerWidth = container.width;

rightBtn.addEventListener('click', () => {
    trendsList.scrollLeft += containerWidth;
});

leftBtn.addEventListener('click', () => {
    trendsList.scrollLeft -= containerWidth;
});

//script for customer reviews carousel.

const customerReviews = document.querySelectorAll('.customer_reviews')
let reviewIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initialSlides);

function initialSlides(){
    if(customerReviews.length > 0){
        customerReviews[reviewIndex].classList.add('displaySlides');
        intervalId = setInterval(nextSlides, 2000);
    }
    
}

function showSlides(index){

    if(index >= customerReviews.length){
        reviewIndex = 0;
    }
    else if(index < 0){
        reviewIndex = customerReviews.length -1;
    }
    customerReviews.forEach(item=>{
        item.classList.remove('displaySlides');
    })
    customerReviews[reviewIndex].classList.add('displaySlides');
}

function prevSlides(){
    clearInterval(intervalId);
    reviewIndex --;
    showSlides(reviewIndex);
}

function nextSlides(){
    reviewIndex ++ ;
    showSlides(reviewIndex);
}