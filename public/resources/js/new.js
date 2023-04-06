const timeStamp = document.querySelector('#timestamp');
const dateText = document.querySelector('#date');

const teamE = document.querySelector('#teamE');
const teamS = document.querySelector('#teamS');
const teamW = document.querySelector('#teamW');
const teamN = document.querySelector('#teamN');

const nameE = document.querySelector('#nameE');
const nameS = document.querySelector('#nameS');
const nameW = document.querySelector('#nameW');
const nameN = document.querySelector('#nameN');

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

const points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
const tPointsText = document.querySelector('#totalPoints');

const twentyFiveButton = document.querySelector('#twentyFive');
const thirtyButton = document.querySelector('#thirty');

const setTwentyFive = () => {
  const arr = Array.from(points);
  for (let p of arr) {
    p.value = '25,000';
  }
  updatePoints(points);
}

const setThirty = () => {
  const arr = Array.from(points);
  for (let p of arr) {
    p.value = '30,000';
  }
  updatePoints(points);
}

twentyFiveButton.addEventListener('click', setTwentyFive);
thirtyButton.addEventListener('click', setThirty);


const updatePoints = (arr) => {
  const totalPoints = 0;
  for (p of arr) {
    totalPoints += parseInt(p.value.replace(',', ''));
  }
  tPointsText.innerHTML = 'Total Points: ' + totalPoints.toLocaleString();
}
updatePoints(points);

const today = new Date();

const getFormattedDate = (date) => {
  const year = date.getYear() - 100;

  const month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  const day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '.' + day + '.' + year;
}

const formattedDate = getFormattedDate(today);

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
  const num = getNumber(_obj.val());
  if (num == 0) {
    _obj.val('');
  } else {
    _obj.val(num.toLocaleString());
  }
}

function getNumber(_str) {
  const arr = _str.split('');
  const out = new Array();
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
