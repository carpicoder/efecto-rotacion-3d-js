const images = [
    "./img/img1.webp",
    "./img/img2.webp",
    "./img/img3.webp",
    "./img/img4.webp",
    "./img/img5.webp",
    "./img/img6.webp",
    "./img/img7.webp",
    "./img/img8.webp",
    "./img/img9.webp",
    "./img/img10.webp",
    "./img/img11.webp",
    "./img/img12.webp",
    "./img/img13.webp",
    "./img/img14.webp",
    "./img/img15.webp",
    "./img/img16.webp",
    "./img/img17.webp",
    "./img/img18.webp",
    "./img/img19.webp",
    "./img/img20.webp",
    "./img/img21.webp",
    "./img/img22.webp",
    "./img/img23.webp",
    "./img/img24.webp",
    "./img/img25.webp",
    "./img/img26.webp",
    "./img/img27.webp",
    "./img/img28.webp",
    "./img/img29.webp",
    "./img/img30.webp",
    "./img/img31.webp",     
    "./img/img32.webp",
    "./img/img33.webp",
    "./img/img34.webp",
    "./img/img35.webp",
    "./img/img36.webp",
]

const range = document.querySelector("#range");
const img = document.querySelector("#img");

range.addEventListener("input", (e) => {
    let value = e.target.value;
    img.src = images[value];
});

img.addEventListener("wheel", (e) => {
    let value = range.value;

    if (e.deltaY < 0) {
        if (value > 0) {
            value--;
        } else {
            value = images.length - 1;
        }
    } else {
        if (value < images.length - 1) {
            value++;
        } else {
            value = 0;
        }
    }

    range.value = value;
    img.src = images[value];
})