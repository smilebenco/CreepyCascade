  const images = [
    "image/frankenstein-icon.png",
    "image/scream-icon.png",
    "image/grimacing-pumpkin-icon.png"
];

function createFallingImage() {
    const img = document.createElement("img");
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src = randomImage;

    const size = Math.random() * (150 - 50) + 50;
    img.style.width = size + "px";
    img.style.height = size + "px";

    const left = Math.random() * (window.innerWidth - size);
    img.style.left = left + "px";

    img.className = "falling-image";
    document.body.appendChild(img);

    setTimeout(() => {
        img.style.top = window.innerHeight + "px";
    }, 10);

    img.addEventListener("transitionend", () => {
        img.remove();
    });
}

function removeOffscreenImages() {
    const images = document.querySelectorAll('.falling-image');
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
            img.remove();
        }
    });
}

setInterval(createFallingImage, 500);
setInterval(removeOffscreenImages, 500);
