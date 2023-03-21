let points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
let tPointsText = document.querySelector('#totalPoints');

let updatePoints = (arr) => {
    let totalPoints = 0;
    for (p of arr) {
        totalPoints += parseInt(p.value.replace(',', ''));
    }
    tPointsText.innerHTML = 'Total Points: ' + totalPoints.toLocaleString();
}
updatePoints(points);

function updateTextView(_obj) {
    let num = getNumber(_obj.val());
    if (num == 0) {
        _obj.val('');
    } else {
        _obj.val(num.toLocaleString());
    }
}

function getNumber(_str) {
    let arr = _str.split('');
    let out = new Array();
    for (let i = 0; i < arr.length; i++) {
        out.push(arr[i]);
    }
    return Number(out.join(''));
}

let incrementOne = (e) => {
    console.log(e);
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value += 100;
    target.value = value.toLocaleString();
    updatePoints(points);
}

let decrementOne = (e) => {
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value -= 100;
    target.value = value.toLocaleString();
    updatePoints(points);
}
let incrementOneK = (e) => {
    console.log(e);
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value += 1000;
    target.value = value.toLocaleString();
    updatePoints(points);
}

let decrementOneK = (e) => {
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value -= 1000;
    target.value = value.toLocaleString();
    updatePoints(points);
}
let incrementTenK = (e) => {
    console.log(e);
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
    value += 10000;
    target.value = value.toLocaleString();
    updatePoints(points);
}

let decrementTenK = (e) => {
    let target = e.parentElement.parentElement.firstElementChild;
    let value = parseInt(target.value.replace(',', ''));
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
        if(this.checked == true){
            let target = document.getElementById($(this)[0].value);
            let value = parseInt(target.value.replace(',', ''));
            value -= 1000;
            target.value = value.toLocaleString();
            updatePoints(points);
        }else {
            let target = document.getElementById($(this)[0].value);
            let value = parseInt(target.value.replace(',', ''));
            value += 1000;
            target.value = value.toLocaleString();
            updatePoints(points);
        }
    });
});