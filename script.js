let allImgs = [
`img/IMG_20220524_092629.jpg`,
`img/IMG_20220524_114752.jpg`,
`img/IMG_20220526_102221.jpg`,
`img/IMG_20220526_141238.jpg`,
`img/IMG_20220527_080056.jpg`,
`img/IMG_20220709_173600.jpg`,
`img/IMG_20220716_213122.jpg`,
`img/IMG_20220818_125254.jpg`,
`img/IMG_20220818_125353.jpg`,
`img/IMG_20220901_130957.jpg`,
`img/IMG_20220901_135335.jpg`,
`img/IMG_20220901_205450.jpg`,
`img/IMG_20220906_145043.jpg`,
`img/IMG_20220906_150703.jpg`,
`img/IMG_20220916_003840.jpg`,
`img/IMG_20220918_113804.jpg`,
`img/IMG_20220918_113920.jpg`,
`img/IMG_20220919_174736.jpg`,
`img/IMG_20220919_182509.jpg`,
`img/IMG_20220919_182516.jpg`,
`img/IMG_20220920_102332.jpg`,
`img/IMG_20220920_113628.jpg`,
`img/IMG_20220920_113647.jpg`,
`img/IMG_20220920_113700.jpg`,
`img/IMG_20220920_113740.jpg`,
`img/IMG_20220920_113810.jpg`,
`img/IMG_20220921_164129.jpg`,
`img/IMG_20220922_081816.jpg`,
`img/IMG_20220922_190244.jpg`,
`img/IMG_20220922_190254.jpg`,
`img/IMG_20221001_000013.jpg`,
`img/IMG_20221001_000052.jpg`,
`img/IMG_20221024_200757.jpg`,
`img/IMG_20221024_200849.jpg`,
`img/IMG_20221118_115829.jpg`,
`img/IMG_20221123_143225.jpg`,
`img/IMG_20230120_135523.jpg`,
`img/IMG_20230212_131531.jpg`
]

// function render(){
//     for (let i = 0; i < allImgs.length; i++) {
//         const img = allImgs[i];
        
//         document.getElementById('img-gallery').innerHTML += /*html*/`
//             <img class="img-card" src="${img}">
//         `;
//     }
// }

function render(){
    splitImgs();
}

function splitImgs(){
    let splitImgs = Math.floor(allImgs.length / 2);
        renderSectionOne(splitImgs);
        renderSectionTwo(splitImgs);
}

function renderSectionOne(splitImgs){
    for (let i = 0; i < allImgs.length -splitImgs; i++) {
        const firstPartImg = allImgs[i];
        
        document.getElementById('img-gallery').innerHTML += /*html*/`
        <img class="img-card" src="${firstPartImg}">
        `;
    }
}

function renderSectionTwo(splitImgs){
    for (let i = allImgs.length -splitImgs; i < allImgs.length; i++) {
        const firstPartImg = allImgs[i];
        
        document.getElementById('img-gallery').innerHTML += /*html*/`
        <img class="img-card" src="${firstPartImg}">
        `;
    }
}
