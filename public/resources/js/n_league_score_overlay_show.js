let namebox = document.querySelectorAll('.playername');
let waitsText = document.querySelectorAll('.waitsTextE, .waitsTextS, .waitsTextW, .waitsTextN');
let waitsContainer = document.querySelectorAll('.waitsContainer');
let doraContainer = document.querySelector('.dora');
let oyaBorder = document.querySelectorAll('.context');
let riichiMarker = document.querySelectorAll('.riichiMarker');
const socket = io();
// document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + (1 / window.devicePixelRatio));

const formatWaits = (tileString) => {
    let chars = tileString.split('');
    let temp = [];
    let tiles = [];
    while (chars.length) {
        let char = chars.shift();
        if ('1235468790'.includes(char)) {
            temp.unshift(char);
        } else if ('mpsz'.includes(char)) {
            while (temp.length) {
                tiles.push(temp.pop() + char);
            }
        } else {
            char = '';
        }
    }
    return tiles;
}

let fields = {};

socket.on('change', (data) => {
    console.log(data);
    console.log(data.documentKey._id);
    let { updateDescription } = data;
    let { updatedFields } = updateDescription;
    let keys = Object.keys(updatedFields);
    fields = updatedFields;
    if (window.location.pathname.slice(9) == data.documentKey._id) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].includes('formattedWaits')) {
                let target = keys[i][9].toLowerCase() + keys[i].slice(10);
                console.log(target);
                let container = document.getElementById(target);
                container.innerHTML = '';
                let formattedNewWaits = Object.values(fields)[i];
                if (formattedNewWaits[0] !== "") {
                    for (let j = 0; j < formattedNewWaits.length; j++) {
                        let img = document.createElement('img');
                        img.src = `../public/resources/img/pai_image/${formattedNewWaits[j]}.png`
                        container.appendChild(img);
                    };
                }
                toggleWaitsText(waitsText);
            } else if (keys[i] == 'formattedDora') {
                doraContainer.innerHTML = '';
                let formattedNewDora = Object.values(fields)[i];
                if (formattedNewDora[0] !== "") {
                    for (let k = 0; k < formattedNewDora.length; k++) {
                        let img = document.createElement('img');
                        img.src = `../public/resources/img/pai_image/${formattedNewDora[k]}.png`
                        doraContainer.appendChild(img);
                    };
                }
            } else if (keys[i].includes('oya')) {
                for (let l = 0; l < oyaBorder.length; l++) {
                    oyaBorder[l].classList.remove('oya');
                }
                let newOya = Object.values(fields)[i];
                let newOyaBorder = document.getElementById(newOya);
                newOyaBorder.classList.add('oya');
            } else if (keys[i].includes('riichi')) {
                let container = document.getElementById(keys[i]);
                if (Object.values(fields)[i] == "") {
                    container.classList.remove('riichi');
                } else {
                    container.classList.add('riichi');
                }
            } else if (keys[i].includes('team')) {
                let container = document.getElementById(keys[i]);
                let newTeam = Object.values(fields)[i];
                container.src = `../public/resources/img/team_logo/${newTeam}.webp`;
            } else if (keys[i] == ('playerHidden')) {
                let lowerContainer = document.querySelector('.lowercontainer');
                let status = Object.values(fields)[i];
                if (status == 'on') {
                    lowerContainer.classList.add('fadedown');
                } else {
                    lowerContainer.classList.remove('fadedown');
                }
            } else if (keys[i] == ('matchInfoHidden')) {
                let upperContainer = document.querySelector('.uppercontainer');
                let status = Object.values(fields)[i];
                if (status == 'on') {
                    upperContainer.classList.add('fadeup');
                } else {
                    upperContainer.classList.remove('fadeup');
                }
            } else if (keys[i].includes('name')) {
                let container = document.getElementById(keys[i]);
                let updatedValue = Object.values(fields)[i];
                container.innerHTML = updatedValue;
            } else if (keys[i].includes('points')) {
                let container = document.getElementById(keys[i]);
                let updatedValue = Object.values(fields)[i];
                container.innerHTML = updatedValue;
            } else if (keys[i].includes('honba')) {
                let container = document.getElementById(keys[i]);
                let updatedValue = Object.values(fields)[i];
                container.innerHTML = updatedValue;
            } else if (keys[i].includes('round')) {
                let container = document.getElementById(keys[i]);
                let updatedValue = Object.values(fields)[i];
                container.innerHTML = updatedValue;
            } else if (keys[i].includes('wind')) {
                let container = document.getElementById(keys[i]);
                let updatedValue = Object.values(fields)[i];
                container.innerHTML = updatedValue;
            } else {
                console.log(keys[i]);
                console.log(Object.values(fields)[i]);
            }
        }
    }
});

const mutationObserver = new MutationObserver(entries => {
    setTimeout(() => {
        marqueeWaits(waitsContainer)
    }, 100);
})

mutationObserver.observe(waitsContainer[0], { childList: true });
mutationObserver.observe(waitsContainer[1], { childList: true });
mutationObserver.observe(waitsContainer[2], { childList: true });
mutationObserver.observe(waitsContainer[3], { childList: true });

const mutationObserverText = new MutationObserver(entries => {
    setTimeout(() => {
        changeFontSize(namebox)
    }, 100);
})

mutationObserverText.observe(namebox[0], { characterData: false, attributes: false, childList: true, subtree: false });
mutationObserverText.observe(namebox[1], { characterData: false, attributes: false, childList: true, subtree: false });
mutationObserverText.observe(namebox[2], { characterData: false, attributes: false, childList: true, subtree: false });
mutationObserverText.observe(namebox[3], { characterData: false, attributes: false, childList: true, subtree: false });


changeFontSize = (arr) => {
    for (let x of arr) {
        if (x.offsetWidth > x.parentElement.offsetWidth) {
            let compSize = getComputedStyle(x).fontSize;
            x.style.fontSize = parseFloat(compSize) * 0.85 + 'px';
        } else {
            x.style.fontSize = "";
        }
    }
};


marqueeWaits = (arr) => {
    for (let x of arr) {
        if (x.offsetWidth > x.parentElement.offsetWidth) {
            x.classList.add('marquee')
        } else {
            x.classList.remove('marquee')
        }
    }
}

toggleWaitsText = (arr) => {
    for (let x of arr) {
        if (x.nextElementSibling.children[0].childElementCount > 0) {
            x.style.opacity = 1;
        } else {
            x.style.opacity = 0;
        }
    }
}


let start = () => {
    changeFontSize(namebox);
    marqueeWaits(waitsContainer);
    toggleWaitsText(waitsText);
}

window.onload = start;
// window.onload = setTimeout(start, 1000);
