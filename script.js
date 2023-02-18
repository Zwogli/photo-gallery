let allImgs = [
`img/IMG_20220524_092629.jpg`,
`img/IMG_20220524_114752.jpg`,
`img/IMG_20220526_102221.jpg`,
`img/IMG_20220526_141238.jpg`,
`img/IMG_20220709_173600.jpg`,
`img/IMG_20220716_213122.jpg`,
`img/IMG_20220818_125254.jpg`,
`img/IMG_20220818_125353.jpg`,
`img/IMG_20220901_130957.jpg`,
`img/IMG_20220901_135335.jpg`,
`img/IMG_20220906_145043.jpg`,
`img/IMG_20220920_113810.jpg`,
`img/IMG_20220921_164129.jpg`,
`img/IMG_20220922_081816.jpg`,
`img/IMG_20220922_190244.jpg`,
`img/IMG_20221001_000052.jpg`,
`img/IMG_20221024_200757.jpg`,
`img/IMG_20221118_115829.jpg`,
`img/IMG_20221123_143225.jpg`,
`img/IMG_20230120_135523.jpg`,
`img/IMG_20230212_131531.jpg`
]
let aktivImg;

function render(){
    splitArrayImgs();
    renderSlideshow();
}

function splitArrayImgs(){
    let splitImgs = Math.floor(allImgs.length / 2);
        renderSectionOne(splitImgs);
        renderSectionTwo(splitImgs);
}

function renderSectionOne(splitImgs){
    for (let i = 0; i < allImgs.length -splitImgs; i++) {
        const firstPartImg = allImgs[i];
        
        document.getElementById('galleryOne').innerHTML += /*html*/`
        <img onclick="openZoom(${i})" class="img-card" src="${firstPartImg}">
        `;
    }
}

function renderSectionTwo(splitImgs){
    for (let i = allImgs.length -splitImgs; i < allImgs.length; i++) {
        const secondPartImg = allImgs[i];
        
        document.getElementById('galleryTwo').innerHTML += /*html*/`
        <img onclick="openZoom(${i})" class="img-card" src="${secondPartImg}">
        `;
    }
}

// Zoom & Carusell
function openZoom(i){
    let zoomOverlay = document.getElementById('zoom-overlay');
    zoomOverlay.classList.remove('d-none');
    zoomOverlay.classList.add('d-flex');
    document.getElementById('body').classList.add('overflow');
    aktivImg = i
    loadZoom();
}

function closeZoom(){
    let zoomOverlay = document.getElementById('zoom-overlay');

    zoomOverlay.classList.add('d-none');
    zoomOverlay.classList.remove('d-flex');
    document.getElementById('body').classList.remove('overflow');
}

function loadZoom(){
    document.getElementById('zoom').innerHTML = /*html*/`
        <img class="zoom-img" src="${allImgs[aktivImg]}">
    `;
}

function zoomNext(nextImg){
    aktivImg = aktivImg + nextImg;
    
    if(aktivImg < 0){
        aktivImg = allImgs.length -1;
    }
    if(aktivImg > allImgs.length -1){
        aktivImg = 0
    }
    
    document.getElementById('zoom').innerHTML = ``;
    document.getElementById('zoom').innerHTML = /*html*/`
        <img class="zoom-img" src="${allImgs[aktivImg]}">
    `;
}