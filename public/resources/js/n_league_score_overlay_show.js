const namebox = document.querySelectorAll('.playername');
const waitsText = document.querySelectorAll('.waitsTextE, .waitsTextS, .waitsTextW, .waitsTextN');
const waitsContainer = document.querySelectorAll('.waitsContainer');
const doraContainer = document.querySelector('.dora');
const oyaBorder = document.querySelectorAll('.context');
const riichiMarker = document.querySelectorAll('.riichiMarker');
const socket = io();
// document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + (1 / window.devicePixelRatio));

const formatWaits = (tileString) => {
    const chars = tileString.split('');
    const temp = [];
    const tiles = [];
    while (chars.length) {
      const char = chars.shift();
      if ('1235468790'.includes(char)) {
        temp.unshift(char);
      } else if ('mpsz'.includes(char)) {
        while (temp.length) {
          tiles.push(temp.pop() + char);
        }
      } else {
        throw new Error('Illegal Character')
      }
    }
    return tiles;
}

const fields = {};

socket.on('change', (data) => {
    console.log(data);
    console.log(data.documentKey._id);
    const { updateDescription } = data;
    const { updatedFields } = updateDescription;
    const keys = Object.keys(updatedFields);
    fields = updatedFields;
    if (window.location.pathname.slice(9) == data.documentKey._id) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].includes('formatted')) {
                console.log(keys[i]);
            } else if (keys[i].includes('waits')) {
                const container = document.getElementById(keys[i]);
                container.innerHTML = '';
                const updatedValue = Object.values(fields)[i];
                const splitValue = updatedValue[0].split('').map(s => s.trim());
                const formattedNewWaits = formatWaits(splitValue);
                if (formattedNewWaits[0] !== "") {
                    for (let j = 0; j < formattedNewWaits.length; j++) {
                        const img = document.createElement('img');
                        img.src = `../public/resources/img/pai_image/${formattedNewWaits[j]}.png`
                        container.appendChild(img);
                    };
                }
                toggleWaitsText(waitsText);
                // marqueeWaits(waitsContainer);
            } else if (keys[i].includes('dora')) {
                doraContainer.innerHTML = '';
                const updatedValue = Object.values(fields)[i];
                const splitValue = updatedValue[0].split('').map(s => s.trim());
                const formattedNewDora = formatWaits(splitValue);
                if (formattedNewDora[0] !== "") {
                    for (let k = 0; k < formattedNewDora.length; k++) {
                        const img = document.createElement('img');
                        img.src = `../public/resources/img/pai_image/${formattedNewDora[k]}.png`
                        doraContainer.appendChild(img);
                    };
                }
            } else if (keys[i].includes('oya')) {
                for (let l = 0; l < oyaBorder.length; l++) {
                    oyaBorder[l].classList.remove('oya');
                }
                const newOya = Object.values(fields)[i];
                const newOyaBorder = document.getElementById(newOya);
                newOyaBorder.classList.add('oya');
            } else if (keys[i].includes('riichi')) {
                const container = document.getElementById(keys[i]);
                if (Object.values(fields)[i] == "") {
                    container.classList.remove('riichi');
                } else {
                    container.classList.add('riichi');
                }
            } else if (keys[i].includes('team')) {
                const container = document.getElementById(keys[i]);
                const newTeam = Object.values(fields)[i];
                container.src = `../public/resources/img/team_logo/${newTeam}.webp`;
            } else if (keys[i] == ('playerHidden')) {
                const lowerContainer = document.querySelector('.lowercontainer');
                const status = Object.values(fields)[i];
                if (status == 'on') {
                    lowerContainer.classList.add('fadedown');
                } else {
                    lowerContainer.classList.remove('fadedown');
                }
            } else if (keys[i] == ('matchInfoHidden')) {
                const upperContainer = document.querySelector('.uppercontainer');
                const status = Object.values(fields)[i];
                if (status == 'on') {
                    upperContainer.classList.add('fadeup');
                } else {
                    upperContainer.classList.remove('fadeup');
                }
            } else if (keys[i].includes('mute')) {
                return;
            } else {
                const container = document.getElementById(keys[i]);
                const updatedValue = Object.values(fields)[i];
                container.innerHTML = updatedValue;
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
            const compSize = getComputedStyle(x).fontSize;
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


const start = () => {
    changeFontSize(namebox);
    marqueeWaits(waitsContainer);
    toggleWaitsText(waitsText);
}

window.onload = start;
// window.onload = setTimeout(start, 1000);
