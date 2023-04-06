const timeStamp = document.querySelector('#timestamp');
const dateText = document.querySelector('#date');

const points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
const tPointsText = document.querySelector('#totalPoints');

const updatePoints = (arr) =>{
    const totalPoints = 0;
    for (p of arr){
        totalPoints += parseInt(p.value.replace(',',''));
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

timeStamp.setAttribute("value", today);
dateText.setAttribute("value", formattedDate);

function updateTextView(_obj){
  const num = getNumber(_obj.val());
  if(num==0){
    _obj.val('');
  }else{
    _obj.val(num.toLocaleString());
  }
}

function getNumber(_str){
  const arr = _str.split('');
  const out = new Array();
  for(const cnt=0;cnt<arr.length;cnt++){
    if(isNaN(arr[cnt])==false){
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(''));
}
$(document).ready(function(){
  $('input[inputmode=numeric]').on('keyup',function(){
    updateTextView($(this));
    updatePoints(points);
  });
});