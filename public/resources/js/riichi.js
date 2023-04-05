// let riichi = document.querySelector('#riichi');
let carousel = document.querySelector('.carousel');
// let lightning = document.querySelector('.lightningHidden');
let riichiTitle = document.querySelector('.riichiTitle');
let riichiText = document.querySelector('.riichiText');
let riichiAnimation = document.querySelector('.riichiAnimation');
let scene = document.querySelector('.scene');
let cell = document.querySelectorAll('.carousel__cell');
let leftbar = document.querySelector('.leftbar');
let rightbar = document.querySelector('.rightbar');
// let riichiSE = document.querySelector('#riichiSE');
let riichiSE = new Howl({
    src: ['../resources/se/riichi.mp3']
})

let lockFlag = false;

let animate = (n) => {
    if (lockFlag) {
        return;
    } else {
        lockFlag = true;
        riichiAnimation.classList.add('show');
        carousel.style.transform = `rotateY(${720 - (n * 45)}deg)`;
        setTimeout(() => {
            riichiSE.play();
        }, 900);
        setTimeout(() => {
            leftbar.classList.add('animateLeftbar', 'show');
            rightbar.classList.add('animateRightbar', 'show');
        }, 1000);
        // lightning.classList.add('show');
        // setTimeout(() => { lightning.children[0].src = "../public/resources/img/lightning_transparent.gif"; }, 300);
        setTimeout(() => {
            riichiTitle.classList.add('show');
            riichiText.classList.add('show', 'riichiTextSpread');
            for (let i = 0; i < cell.length; i++) {
                if (i !== n) {
                    cell[i].classList.add('fadeout');
                }
            }
            scene.classList.add('scaleOut');
        }, 1200);
        setTimeout(() => {
            // lightning.classList.remove('show');
            riichiTitle.classList.remove('show');
            riichiText.classList.remove('show');
            riichiAnimation.classList.remove('show')
            carousel.style.transform = `rotateY(0deg)`;
            for (let i = 0; i < cell.length; i++) {
                if (i !== n) {
                    cell[i].classList.remove('fadeout');
                }
            }
            scene.classList.remove('scaleOut');
            leftbar.classList.remove('animateLeftbar', 'show');
            rightbar.classList.remove('animateRightbar', 'show');
        }, 5000);
        setTimeout(() => {
            riichiText.classList.remove('riichiTextSpread');
            lockFlag = false;
        }, 5200)
    }
}


// riichi.addEventListener('click', animate);

// const socket = io();

// let fields = {};

socket.on('change', (data) => {
    let { updateDescription } = data;
    let { updatedFields } = updateDescription;
    let keys = Object.keys(updatedFields);
    fields = updatedFields;
    if (window.location.pathname.slice(9) == data.documentKey._id) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].includes('riichi')) {
                let container = document.getElementById(keys[i]);
                let riichiTeam = container.parentElement.children[1].children[0].children[0].src
                let n = 0;
                if (riichiTeam.toLowerCase().includes('destroyers'.toLowerCase())) {
                    n = 0;
                } else if (riichiTeam.toLowerCase().includes('rinshan'.toLowerCase())) {
                    n = 1;
                } else if (riichiTeam.toLowerCase().includes('brooklyn'.toLowerCase())) {
                    n = 2;
                } else if (riichiTeam.toLowerCase().includes('opie'.toLowerCase())) {
                    n = 3;
                } else if (riichiTeam.toLowerCase().includes('emperor'.toLowerCase())) {
                    n = 4;
                } else if (riichiTeam.toLowerCase().includes('queens'.toLowerCase())) {
                    n = 5;
                } else if (riichiTeam.toLowerCase().includes('yakumen'.toLowerCase())) {
                    n = 6;
                } else if (riichiTeam.toLowerCase().includes('peregrine'.toLowerCase())) {
                    n = 7;
                }
                console.log(n);
                if (Object.values(fields)[i] !== '') {
                    animate(n);
                }
            }
        }
    }
});
