let points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
let riichi = document.querySelectorAll('#riichiE, #riichiS, #riichiW, #riichiN');
let waits = document.querySelectorAll('#waitsE, #waitsS, #waitsW, #waitsN');
let kyotaku = document.querySelector('#kyotaku');
let honba = document.querySelector('#honba');
let dora = document.querySelector('#dora');
let ryukyokuButton = document.querySelector('#ryukyoku')
let clearButton = document.querySelector('#clear');
let tPointsText = document.querySelector('#totalPoints');

let houju = document.querySelector('#houju');
let han = document.querySelector('#han');
let fu = document.querySelector('#fu');
let calc = document.querySelector('#calc');

let calcPoint = () => {
    if (houju.value == "Tsumo") {
        if (han.value == 1) {
            switch (fu.valueAsNumber) {
                case 30:
                    return '500 all';
                case 40:
                    return '700 all';
                case 50:
                    return '800 all';
                case 60:
                    return '1000 all';
                case 70:
                    return '1200 all';
                case 80:
                    return '1300 all';
                case 90:
                    return '1500 all';
                case 100:
                    return '1600 all';
                case 110:
                    return '1800 all';

            }
        }
    }
}

let updateCalc = () => {
    calc.innerHTML = calcPoint();
}

if(han.value > 1){
    fu.setAttribute('min', '20');
}

let updatePoints = (arr) => {
    let totalPoints = 0;
    for (p of arr) {
        totalPoints += parseInt(p.value.replace(',', ''));
    }
    totalPoints = totalPoints + kyotaku.valueAsNumber * 1000
    tPointsText.innerHTML = 'Total Points: ' + totalPoints.toLocaleString();
}
updatePoints(points);

function updateTextView(_obj) {
    let num = getNumber(_obj.val());
    $(_obj.val(num.toLocaleString()));
}

function getNumber(_str) {
    let arr = _str.replace(',', '').split('');
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

let ryukyoku = () => {
    let count = 0
    let arr = Array.from(riichi);
    console.log(arr);
    for (let r of arr) {
        if (r.checked) {
            count++
            r.checked = false;
        }
    }
    console.log(count);
    kyotaku.valueAsNumber = kyotaku.valueAsNumber + count;
    honba.valueAsNumber++;
    updatePoints(points);
    for (w of waits) {
        w.value = "";
    }
    dora.value = "";
}

ryukyokuButton.addEventListener('click', ryukyoku);

let clear = () => {
    let count = 0
    let arr = Array.from(riichi);
    for (let r of arr) {
        if (r.checked) {
            count++
            r.checked = false;
        }
    }
    kyotaku.valueAsNumber = 0;
    honba.valueAsNumber = 0;
    updatePoints(points);
    for (w of waits) {
        w.value = "";
    }
    dora.value = "";
}

clearButton.addEventListener('click', clear);

$(document).ready(function () {
    $('input[inputmode=numeric]').on('change', function () {
        updateTextView($(this));
        updatePoints(points);
    });
    $('input[type=checkbox]').on('change', function () {
        if (this.checked == true) {
            let target = document.getElementById($(this)[0].value);
            let value = parseInt(target.value.replace(',', ''));
            value -= 1000;
            target.value = value.toLocaleString();
            updatePoints(points);
        }
        // else {
        //     let target = document.getElementById($(this)[0].value);
        //     let value = parseInt(target.value.replace(',', ''));
        //     value += 1000;
        //     target.value = value.toLocaleString();
        //     updatePoints(points);
        // }
    });
    $('#kyotaku').on('change', function () {
        updatePoints(points);
    });
    $('#han').on('change', function (){
        updateCalc();
    });
    $('#fu').on('change', function (){
        updateCalc();
    });
});