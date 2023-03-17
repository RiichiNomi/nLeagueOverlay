let namebox = document.querySelectorAll('.playername');
let waitsContainer = document.querySelectorAll('.waitsContainer');
document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));

changeFontSize = (arr) => {
    for (let x of arr) {
        if (x.offsetWidth > x.parentElement.offsetWidth) {
            x.style.fontSize = '2vw';
        }
    }
};


marqueeWaits = (arr) => {
    for (let x of arr) {
        if(x.offsetWidth > x.parentElement.offsetWidth ){
            x.classList.add('marquee')
        }
    }
}



let start = () => {
    changeFontSize(namebox);
    marqueeWaits(waitsContainer);
}

window.onload = start;
// window.onload = setTimeout(start, 1000);