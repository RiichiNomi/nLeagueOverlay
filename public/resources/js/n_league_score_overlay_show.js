let namebox = document.querySelectorAll('.playername');
let waitsText = document.querySelectorAll('.waitsTextE, .waitsTextS, .waitsTextW, .waitsTextN');
let waitsContainer = document.querySelectorAll('.waitsContainer');
let doraContainer = document.querySelector('.dora');
let oyaBorder = document.querySelectorAll('.context');
let riichiMarker = document.querySelectorAll('.riichiMarker');
const socket = io();
// document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + (1 / window.devicePixelRatio));


let addLetter = (suitNumbers, letter) => {
    let formatted = []
    for (n of suitNumbers) {
        formatted.push(n + letter);
    }
    return formatted;
}

let formatWaits = (arr) => {
    let letterPositions = [];
    if (arr.indexOf('m') !== -1) {
        letterPositions.push(arr.indexOf('m'));
    }

    if (arr.indexOf('p') !== -1) {
        letterPositions.push(arr.indexOf('p'));
    }

    if (arr.indexOf('s') !== -1) {
        letterPositions.push(arr.indexOf('s'));
    }

    if (arr.indexOf('z') !== -1) {
        letterPositions.push(arr.indexOf('z'));
    }
    function compareNumbers(a, b) {
        return a - b;
    }
    letterPositions = letterPositions.sort(compareNumbers);
    let formattedWaits = [];
    let firstSuitNumbers = arr.slice(0, letterPositions[0]);
    let firstLetter = arr[letterPositions[0]];
    let firstSuitWaits = addLetter(firstSuitNumbers, firstLetter);
    formattedWaits.push(...firstSuitWaits);
    for (let i = 1; i < letterPositions.length; i++) {
        let followingSuitNumbers = arr.slice(letterPositions[i - 1] + 1, letterPositions[i]);
        let followingLetter = arr[letterPositions[i]];
        let followingSuitWaits = addLetter(followingSuitNumbers, followingLetter);
        formattedWaits.push(...followingSuitWaits);
    }
    return formattedWaits
}

let fields = {};

socket.on('change', (data) => {
    console.log(data);
    let { updateDescription } = data;
    let { updatedFields } = updateDescription;
    let keys = Object.keys(updatedFields);
    fields = updatedFields;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].includes('formatted')) {
            console.log(keys[i]);
        } else if (keys[i].includes('waits')) {
            let container = document.getElementById(keys[i]);
            container.innerHTML = '';
            let updatedValue = Object.values(fields)[i];
            let splitValue = updatedValue[0].split('').map(s => s.trim());
            let formattedNewWaits = formatWaits(splitValue);
            if (formattedNewWaits[0] !== "") {
                for (let j = 0; j < formattedNewWaits.length; j++) {
                    let img = document.createElement('img');
                    img.src = `../public/resources/img/pai_image/${formattedNewWaits[j]}.png`
                    container.appendChild(img);
                };
            }
            toggleWaitsText(waitsText);
            // marqueeWaits(waitsContainer);
        } else if (keys[i].includes('dora')) {
            doraContainer.innerHTML = '';
            let updatedValue = Object.values(fields)[i];
            let splitValue = updatedValue[0].split('').map(s => s.trim());
            let formattedNewDora = formatWaits(splitValue);
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
        } else {
            let container = document.getElementById(keys[i]);
            let updatedValue = Object.values(fields)[i];
            container.innerHTML = updatedValue;
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


changeFontSize = (arr) => {
    for (let x of arr) {
        if (x.offsetWidth > x.parentElement.offsetWidth) {
            let compSize = getComputedStyle(x).fontSize;
            x.style.fontSize = parseFloat(compSize) * 0.85 + 'px';
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
