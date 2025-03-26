function displayNav() {
    document.getElementById('threedots').style.display = 'none';
    document.getElementById('twolines').style.display = "flex";
}

function removeNav() {
    document.getElementById('threedots').style.display = 'block';
    document.getElementById('twolines').style.display = "none";
}

const scroller = document.querySelector('.scroller');
let scrollAmount = 0;

function scrollImages() {
    scrollAmount -= 1; // Adjust speed
    if (scrollAmount <= -scroller.offsetWidth / 2) {
        scrollAmount = 0; // Reset to create infinite loop
    }
    scroller.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(scrollImages);
}

scrollImages();
