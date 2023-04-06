let timeStamp = document.querySelector('#timestamp');
let dateText = document.querySelector('#date');

let teamE = document.querySelector('#teamE');
let teamS = document.querySelector('#teamS');
let teamW = document.querySelector('#teamW');
let teamN = document.querySelector('#teamN');

let nameE = document.querySelector('#nameE');
let nameS = document.querySelector('#nameS');
let nameW = document.querySelector('#nameW');
let nameN = document.querySelector('#nameN');

$(teamE).on('change', function () {
  for (let i = 1; i < nameE.options.length; i++) {
    if (i == (1 + 3 * (teamE.selectedIndex - 1)) || i == ((1 + 3 * (teamE.selectedIndex - 1)) + 1) || i == ((1 + 3 * (teamE.selectedIndex - 1)) + 2)) {
      nameE.options[i].hidden = false;
    } else {
      nameE.options[i].hidden = true;
    }
  }
})

$(teamS).on('change', function () {
  for (let i = 1; i < nameS.options.length; i++) {
    if (i == (1 + 3 * (teamS.selectedIndex - 1)) || i == ((1 + 3 * (teamS.selectedIndex - 1)) + 1) || i == ((1 + 3 * (teamS.selectedIndex - 1)) + 2)) {
      nameS.options[i].hidden = false;
    } else {
      nameS.options[i].hidden = true;
    }
  }
})

$(teamW).on('change', function () {
  for (let i = 1; i < nameW.options.length; i++) {
    if (i == (1 + 3 * (teamW.selectedIndex - 1)) || i == ((1 + 3 * (teamW.selectedIndex - 1)) + 1) || i == ((1 + 3 * (teamW.selectedIndex - 1)) + 2)) {
      nameW.options[i].hidden = false;
    } else {
      nameW.options[i].hidden = true;
    }
  }
})

$(teamN).on('change', function () {
  for (let i = 1; i < nameN.options.length; i++) {
    if (i == (1 + 3 * (teamN.selectedIndex - 1)) || i == ((1 + 3 * (teamN.selectedIndex - 1)) + 1) || i == ((1 + 3 * (teamN.selectedIndex - 1)) + 2)) {
      nameN.options[i].hidden = false;
    } else {
      nameN.options[i].hidden = true;
    }
  }
})

let points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
let tPointsText = document.querySelector('#totalPoints');

let twentyFiveButton = document.querySelector('#twentyFive');
let thirtyButton = document.querySelector('#thirty');

let setTwentyFive = () => {
  let arr = Array.from(points);
  for (let p of arr) {
    p.value = '25,000';
  }
  updatePoints(points);
}

let setThirty = () => {
  let arr = Array.from(points);
  for (let p of arr) {
    p.value = '30,000';
  }
  updatePoints(points);
}

twentyFiveButton.addEventListener('click', setTwentyFive);
thirtyButton.addEventListener('click', setThirty);


let updatePoints = (arr) => {
  let totalPoints = 0;
  for (p of arr) {
    totalPoints += parseInt(p.value.replace(',', ''));
  }
  tPointsText.innerHTML = 'Total Points: ' + totalPoints.toLocaleString();
}
updatePoints(points);

let today = new Date();

let getFormattedDate = (date) => {
  let year = date.getYear() - 100;

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '.' + day + '.' + year;
}

let formattedDate = getFormattedDate(today);

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
};

const mediumTime = new Intl.DateTimeFormat("en", {
  weekday: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
});

timeStamp.setAttribute("value", mediumTime.format(today));
dateText.setAttribute("value", formattedDate);

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
