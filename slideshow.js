let slideImgs = [];
loadSlideshow();

function randomImgs(){
    slideImgs.splice(slideImgs);
    for (let pics = 0; pics < 5; pics++) {
        let pic = pics;

        let i = allImgs.length;
        let randomImg = Math.floor(Math.random() * i);

        slideImgs.push(allImgs[randomImg]);
        saveSlideshow();
    }
    generateRandomSlideshow();
}

function saveSlideshow(){
    let saveSlideshow = JSON.stringify(slideImgs);

    localStorage.setItem('Slideshow', saveSlideshow);
}
function loadSlideshow(){
    let saveSlideshow = localStorage.getItem('Slideshow');

    if (saveSlideshow) {
        slideImgs = JSON.parse(saveSlideshow); 
    }
}

function generateRandomSlideshow(){
    for (let i = 0; i < slideImgs.length; i++) {
        let slideImg = slideImgs[i];
        let slide = document.getElementById('slide');
        
    slide.innerHTML += /*html*/`
        <img class="slideshow-imgs" src="${slideImg}"> 
    `;
    }
}