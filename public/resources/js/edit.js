const points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
const tPointsText = document.querySelector('#totalPoints');

const updatePoints = (arr) => {
    const totalPoints = 0;
    for (p of arr) {
        totalPoints += parseInt(p.value.replace(',', ''));
    }
    tPointsText.innerHTML = 'Total Points: ' + totalPoints.toLocaleString();
}
updatePoints(points);

function updateTextView(_obj) {
    const num = getNumber(_obj.val());
    $(_obj.val(num.toLocaleString()));
}

function getNumber(_str) {
    const arr = _str.replace(',','').split('');
    const out = new Array();
    for (const i = 0; i < arr.length; i++) {
        out.push(arr[i]);
    }
    return Number(out.join(''));
}

const incrementOne = (e) => {
    console.log(e);
    const target = e.parentElement.parentElement.firstElementChild;
    const value = parseInt(target.value.replace(',', ''));
    value += 100;
    target.value = value.toLocaleString();
    updatePoints(points);
}

const decrementOne = (e) => {
    const target = e.parentElement.parentElement.firstElementChild;
    const value = parseInt(target.value.replace(',', ''));
    value -= 100;
    target.value = value.toLocaleString();
    updatePoints(points);
}
const incrementOneK = (e) => {
    console.log(e);
    const target = e.parentElement.parentElement.firstElementChild;
    const value = parseInt(target.value.replace(',', ''));
    value += 1000;
    target.value = value.toLocaleString();
    updatePoints(points);
}

const decrementOneK = (e) => {
    const target = e.parentElement.parentElement.firstElementChild;
    const value = parseInt(target.value.replace(',', ''));
    value -= 1000;
    target.value = value.toLocaleString();
    updatePoints(points);
}
const incrementTenK = (e) => {
    console.log(e);
    const target = e.parentElement.parentElement.firstElementChild;
    const value = parseInt(target.value.replace(',', ''));
    value += 10000;
    target.value = value.toLocaleString();
    updatePoints(points);
}

const decrementTenK = (e) => {
    const target = e.parentElement.parentElement.firstElementChild;
    const value = parseInt(target.value.replace(',', ''));
    value -= 10000;
    target.value = value.toLocaleString();
    updatePoints(points);
}



$(document).ready(function () {
    $('input[inputmode=numeric]').on('change', function () {
        updateTextView($(this));
        updatePoints(points);
    });
    $('input[type=checkbox]').on('change', function () {
        if (this.checked == true) {
            const target = document.getElementById($(this)[0].value);
            const value = parseInt(target.value.replace(',', ''));
            value -= 1000;
            target.value = value.toLocaleString();
            updatePoints(points);
        } else {
            const target = document.getElementById($(this)[0].value);
            const value = parseInt(target.value.replace(',', ''));
            value += 1000;
            target.value = value.toLocaleString();
            updatePoints(points);
        }
    });
});