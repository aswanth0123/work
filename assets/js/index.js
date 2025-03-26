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

let add = document.querySelector(".add_opt");

// Initially hide the div
add.style.display = "none";

setTimeout(() => {
    document.querySelector(".main").style.opacity = 0.2;
    
    add.style.display = "flex"; 
    add.style.opacity = "0";
    add.style.transform = "scale(0.8)"; 
    setTimeout(() => {
        add.style.opacity = "1"; 
        add.style.transform = "scale(1)"; 
    }, 50);
}, 1000);

function close_add() {
    let add = document.querySelector(".add_opt");
    add.style.opacity = "0";
    add.style.transform = "scale(0.8)"; 

    document.querySelector(".main").style.opacity = 1;

    setTimeout(() => {
        add.style.display = "none";
    }, 500);
}
