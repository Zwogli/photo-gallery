let slideImgs = allImgs;
let currentImg = 0;

function renderSlideshow(){
    shuffle(slideImgs).splice(0,slideImgs.length - 5);
    generateSlideshow();
    // generateIndikator();    
}

function generateSlideshow(){
    let slide = document.getElementById('slide');   
    slide.innerHTML = /*html*/`
        <img class="slideshow-imgs" src="${slideImgs[currentImg]}">
        <a onclick="next(-1)" class="arrow-left" href="#">
            <div class="blur">
                <img class="arrow" src="img/icon/arrow-left.png">
            </div>
        </a>
        <a onclick="next(1)" class="arrow-right" href="#">
            <div class="blur">
                <img class="arrow" src="img/icon/arrow-right.png">
            </div>
        </a> 
    `;
}

function next(i){
    currentImg = currentImg + i
    if(currentImg < 0){
        currentImg = slideImgs.length -1;
    }
    if(currentImg > slideImgs.length -1){
        currentImg = 0
    }
    generateSlideshow();
}

function shuffle(slideImgs) {
    for (let i = slideImgs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [slideImgs[i], slideImgs[j]] = [slideImgs[j], slideImgs[i]];
    }
    return slideImgs;
}

