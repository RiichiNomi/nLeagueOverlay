let namebox = document.querySelectorAll('.playername');
let waitsText = document.querySelectorAll('.waitsTextE, .waitsTextS, .waitsTextW, .waitsTextN');
let waitsContainer = document.querySelectorAll('.waitsContainer');
let doraContainer = document.querySelector('.dora');
const socket = io();
// document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + (1 / window.devicePixelRatio));


let fields = {};

socket.on('change', (data) => {
    console.log(data);
    let { updateDescription } = data;
    let { updatedFields } = updateDescription;
    let keys = Object.keys(updatedFields);
    fields = updatedFields;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].includes('waits')) {
            let container = document.getElementById(keys[i]);
            container.innerHTML = '';
            let updatedValue = Object.values(fields)[i];
            let newWaits = updatedValue.map(s => s.trim());
            if (newWaits[0] !== "") {
                for (let j = 0; j < newWaits.length; j++) {
                    let img = document.createElement('img');
                    img.src = `../public/resources/img/pai_image/${newWaits[j]}.png`
                    container.appendChild(img);
                };
            }
            toggleWaitsText(waitsText);
            marqueeWaits(waitsContainer);
        } else if (keys[i].includes('dora')) {
            doraContainer.innerHTML = '';
            let updatedValue = Object.values(fields)[i];
            let newDora = updatedValue.map(s => s.trim());
            if (newDora[0] !== "") {
                for (let k = 0; k < newDora.length; k++) {
                    let img = document.createElement('img');
                    img.src = `../public/resources/img/pai_image/${newDora[k]}.png`
                    doraContainer.appendChild(img);
                };
            }
        } else if(keys[i].includes('oya')){
            for ( let l = 0; l < oyaBorder.length; l++){
                oyaBorder[l].classList.remove('oyaBorder');
            }
            let newOya = Object.values(fields)[i];
            let newOyaBorder = document.getElementById(newOya);
            newOyaBorder.classList.add('oyaBorder');
        } else {
            let container = document.getElementById(keys[i]);
            let updatedValue = Object.values(fields)[i];
            container.innerHTML = updatedValue;
        }
    }
});


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
