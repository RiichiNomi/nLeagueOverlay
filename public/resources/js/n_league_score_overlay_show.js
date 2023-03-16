let namebox = document.querySelectorAll('.playername');
let waitsContainer = document.querySelectorAll('.waitsContainer');

changeFontSize = (arr) => {
    for (let x of arr) {
        if (x.offsetWidth > 135) {
            x.style.fontSize = '1.18em';
        }
    }
};

marqueeWaits =(arr) => {
    for (let x of arr) {
        if(x.offsetWidth > 73 ){
            x.classList.add('marquee')
        }
    }
}


let start = () => {
    changeFontSize(namebox);
    marqueeWaits(waitsContainer);
}

document.addEventListener('load',start());
