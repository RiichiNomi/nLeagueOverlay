let namebox = document.querySelectorAll('.playername');

changeFontSize = (arr) => {
    for (let x of arr) {
        if (x.offsetWidth > 130) {
            x.style.fontSize = '1.18em';
        }
    }
};

changeFontSize(namebox);