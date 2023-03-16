let namebox = document.querySelectorAll('.playername');
let waitsContainer = document.querySelectorAll('.waitsContainer');

changeFontSize = (arr) => {
    for (let x of arr) {
        if (x.offsetWidth > 135) {
            x.style.fontSize = '1.18em';
        }
    }
};

changeFontSize(namebox);

marqueeWaits =(arr) => {
    for (let x of arr) {
        if(x.offsetWidth > 73 ){
            x.classList.add('marquee')
        }
    }
}
window.addEventListener('load',(marqueeWaits(waitsContainer)));
