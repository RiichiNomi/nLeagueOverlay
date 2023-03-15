let points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
let tPointsText = document.querySelector('#totalPoints');

let updatePoints = (arr) =>{
    let totalPoints = 0;
    for (p of arr){
        totalPoints += parseInt(p.value.replace(',',''));
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
    for (let cnt = 0; cnt < arr.length; cnt++) {
        if (isNaN(arr[cnt]) == false) {
            out.push(arr[cnt]);
        }
    }
    return Number(out.join(''));
}
$(document).ready(function () {
    $('input[inputmode=numeric]').on('keyup', function () {
        updateTextView($(this));
        updatePoints(points);
    });
});