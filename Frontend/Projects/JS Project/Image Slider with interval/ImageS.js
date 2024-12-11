const images = [
    'Gulu2.jpg',
    'Fric.jpg',
    'Trio3.jpg', 
    'Fric2.jpg',
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    sliderImage.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
