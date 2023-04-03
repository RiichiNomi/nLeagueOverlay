let points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
let riichi = document.querySelectorAll('#riichiE, #riichiS, #riichiW, #riichiN');
let waits = document.querySelectorAll('#waitsE, #waitsS, #waitsW, #waitsN');
let playerName = document.querySelectorAll('#nameE, #nameS, #nameW, #nameN');
let kyotaku = document.querySelector('#kyotaku');
let honba = document.querySelector('#honba');
let honbaPoints = document.querySelector('#honbaPoints');
let dora = document.querySelector('#dora');
let ryukyokuButton = document.querySelector('#ryukyoku')
let clearButton = document.querySelector('#clear');
let tPointsText = document.querySelector('#totalPoints');
let oyaMarker = document.querySelectorAll('#oyaE, #oyaS, #oyaW, #oyaN');
let wind = document.querySelector('#wind');
let round = document.querySelectorAll('#round');
let updateApply = document.querySelector('#updateApply');
let form = document.querySelector('#matchinfo');

let agari = document.querySelector('#agari');
let houju = document.querySelector('#houju');
let han = document.querySelector('#han');
let fu = document.querySelector('#fu');
let calc = document.querySelector('#calc');
let applyButton = document.querySelector('#apply');

let teamE = document.querySelector('#teamE');
let teamS = document.querySelector('#teamS');
let teamW = document.querySelector('#teamW');
let teamN = document.querySelector('#teamN');

let nameE = document.querySelector('#nameE');
let nameS = document.querySelector('#nameS');
let nameW = document.querySelector('#nameW');
let nameN = document.querySelector('#nameN');

$(teamE).on('change', function () {
    for (let i = 0; i < nameE.options.length; i++) {
        if (i == (3 * (teamE.selectedIndex)) || i == ((3 * (teamE.selectedIndex)) + 1) || i == ((3 * (teamE.selectedIndex)) + 2)) {
            nameE.options[i].hidden = false;
        } else {
            nameE.options[i].hidden = true;
        }
    }
})

$(teamS).on('change', function () {
    for (let i = 0; i < nameS.options.length; i++) {
        if (i == (3 * (teamS.selectedIndex)) || i == ((3 * (teamS.selectedIndex)) + 1) || i == ((3 * (teamS.selectedIndex)) + 2)) {
            nameS.options[i].hidden = false;
        } else {
            nameS.options[i].hidden = true;
        }
    }
})

$(teamW).on('change', function () {
    for (let i = 0; i < nameW.options.length; i++) {
        if (i == (3 * (teamW.selectedIndex)) || i == ((3 * (teamW.selectedIndex)) + 1) || i == ((3 * (teamW.selectedIndex)) + 2)) {
            nameW.options[i].hidden = false;
        } else {
            nameW.options[i].hidden = true;
        }
    }
})

$(teamN).on('change', function () {
    for (let i = 0; i < nameN.options.length; i++) {
        if (i == (3 * (teamN.selectedIndex)) || i == ((3 * (teamN.selectedIndex)) + 1) || i == ((3 * (teamN.selectedIndex)) + 2)) {
            nameN.options[i].hidden = false;
        } else {
            nameN.options[i].hidden = true;
        }
    }
})

let calcOyaPoint = () => {
    if (houju.value == "Tsumo") {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '500 all';
                    return 1500;
                case 40:
                    calc.innerHTML = '700 all';
                    return 2000;
                case 50:
                    calc.innerHTML = '800 all';
                    return 2400;
                case 60:
                    calc.innerHTML = '1000 all';
                    return 2900;
                case 70:
                    calc.innerHTML = '1200 all';
                    return 3400;
                case 80:
                    calc.innerHTML = '1300 all';
                    return 3900;
                case 90:
                    calc.innerHTML = '1500 all';
                    return 4400;
                case 100:
                    calc.innerHTML = '1600 all';
                    return 4800;
                case 110:
                    calc.innerHTML = '1800 all';
                    return 5300;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '700 all';
                    return 2100;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '1000 all';
                    return 2900;
                case 40:
                    calc.innerHTML = '1300 all';
                    return 3900;
                case 50:
                    calc.innerHTML = '1600 all';
                    return 4800;
                case 60:
                    calc.innerHTML = '2000 all';
                    return 5800;
                case 70:
                    calc.innerHTML = '2300 all';
                    return 6800;
                case 80:
                    calc.innerHTML = '2600 all';
                    return 7700;
                case 90:
                    calc.innerHTML = '2900 all';
                    return 8700;
                case 100:
                    calc.innerHTML = '3200 all';
                    return 9600;
                case 110:
                    calc.innerHTML = '3600 all';
                    return 10600;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '1300 all';
                    return 3900;
                case 25:
                    calc.innerHTML = '1600 all';
                    return 4800;
                case 30:
                    calc.innerHTML = '2000 all';
                    return 5800;
                case 40:
                    calc.innerHTML = '2600 all';
                    return 7700;
                case 50:
                    calc.innerHTML = '3200 all';
                    return 9600;
                case 60:
                    calc.innerHTML = '3900 all';
                    return 11600;
                case 70:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '2600 all';
                    return 7800;
                case 25:
                    calc.innerHTML = '3200 all';
                    return 9600;
                case 30:
                    calc.innerHTML = '3900 all';
                    return 11600;
                case 40:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 50:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 60:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 70:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 4000 all';
                    return 12000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 4000 all';
            return 12000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 6000 all';
            return 18000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 6000 all';
            return 18000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 8000 all';
            return 24000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 8000 all';
            return 24000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 8000 all';
            return 24000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 12000 all';
            return 36000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 12000 all';
            return 36000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 16000 all';
            return 48000;
        }
    } else {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '1500';
                    return 1500;
                case 40:
                    calc.innerHTML = '2000';
                    return 2000;
                case 50:
                    calc.innerHTML = '2400';
                    return 2400;
                case 60:
                    calc.innerHTML = '2900';
                    return 2900;
                case 70:
                    calc.innerHTML = '3400';
                    return 3400;
                case 80:
                    calc.innerHTML = '3900';
                    return 3900;
                case 90:
                    calc.innerHTML = '4400';
                    return 4400;
                case 100:
                    calc.innerHTML = '4800';
                    return 4800;
                case 110:
                    calc.innerHTML = '5300';
                    return 5300;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '2400';
                    return 2400;
                case 30:
                    calc.innerHTML = '2900';
                    return 2900;
                case 40:
                    calc.innerHTML = '3900';
                    return 3900;
                case 50:
                    calc.innerHTML = '4800';
                    return 4800;
                case 60:
                    calc.innerHTML = '5800';
                    return 5800;
                case 70:
                    calc.innerHTML = '6800';
                    return 6800;
                case 80:
                    calc.innerHTML = '7700';
                    return 7700;
                case 90:
                    calc.innerHTML = '8700';
                    return 8700;
                case 100:
                    calc.innerHTML = '9600';
                    return 9600;
                case 110:
                    calc.innerHTML = '10600';
                    return 10600;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '4800';
                    return 4800;
                case 30:
                    calc.innerHTML = '5800';
                    return 5800;
                case 40:
                    calc.innerHTML = '7700';
                    return 7700;
                case 50:
                    calc.innerHTML = '9600';
                    return 9600;
                case 60:
                    calc.innerHTML = '11600';
                    return 11600;
                case 70:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '9600';
                    return 9600;
                case 30:
                    calc.innerHTML = '11600';
                    return 11600;
                case 40:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 50:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 60:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 70:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 80:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 90:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 100:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
                case 110:
                    calc.innerHTML = 'Mangan 12000';
                    return 12000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 12000';
            return 12000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 18000';
            return 18000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 18000';
            return 18000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 24000';
            return 24000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 24000';
            return 24000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 24000';
            return 24000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 36000';
            return 36000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 36000';
            return 36000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 48000';
            return 48000;
        }
    }
}


let calcKoPoint = () => {
    if (houju.value == "Tsumo") {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '300/500';
                    return 1000;
                case 40:
                    calc.innerHTML = '400/700';
                    return 1300;
                case 50:
                    calc.innerHTML = '400/800';
                    return 1600;
                case 60:
                    calc.innerHTML = '500/1000';
                    return 2000;
                case 70:
                    calc.innerHTML = '600/1200';
                    return 2300;
                case 80:
                    calc.innerHTML = '700/1300';
                    return 2600;
                case 90:
                    calc.innerHTML = '800/1500';
                    return 2900;
                case 100:
                    calc.innerHTML = '800/1600';
                    return 3200;
                case 110:
                    calc.innerHTML = '900/1800';
                    return 3600;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '400/700';
                    return 1400;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '500/1000';
                    return 2000;
                case 40:
                    calc.innerHTML = '700/1300';
                    return 2600;
                case 50:
                    calc.innerHTML = '800/1600';
                    return 3200;
                case 60:
                    calc.innerHTML = '1000/2000';
                    return 3900;
                case 70:
                    calc.innerHTML = '1200/2300';
                    return 4500;
                case 80:
                    calc.innerHTML = '1300/2600';
                    return 5200;
                case 90:
                    calc.innerHTML = '1500/2900';
                    return 5800;
                case 100:
                    calc.innerHTML = '1600/3200';
                    return 6400;
                case 110:
                    calc.innerHTML = '1800/3600';
                    return 7100;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '700/1300';
                    return 2600;
                case 25:
                    calc.innerHTML = '800/1600';
                    return 3200;
                case 30:
                    calc.innerHTML = '1000/2000';
                    return 3900;
                case 40:
                    calc.innerHTML = '1300/2600';
                    return 5200;
                case 50:
                    calc.innerHTML = '1600/3200';
                    return 6400;
                case 60:
                    calc.innerHTML = '2000/3900';
                    return 7700;
                case 70:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = '1300/2600';
                    return 5200;
                case 25:
                    calc.innerHTML = '1600/3200';
                    return 6400;
                case 30:
                    calc.innerHTML = '2000/3900';
                    return 7700;
                case 40:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 50:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 60:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 70:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 2000/4000';
                    return 8000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 2000/4000';
            return 8000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 3000/6000';
            return 12000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 3000/6000';
            return 12000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 4000/8000';
            return 16000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 4000/8000';
            return 16000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 4000/8000';
            return 16000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 6000/12000';
            return 24000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 6000/12000';
            return 24000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 8000/16000';
            return 32000;
        }
    } else {
        if (han.value == 1) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 30:
                    calc.innerHTML = '1000';
                    return 1000;
                case 40:
                    calc.innerHTML = '1300';
                    return 1300;
                case 50:
                    calc.innerHTML = '1600';
                    return 1600;
                case 60:
                    calc.innerHTML = '2000';
                    return 2000;
                case 70:
                    calc.innerHTML = '2300';
                    return 2300;
                case 80:
                    calc.innerHTML = '2600';
                    return 2600;
                case 90:
                    calc.innerHTML = '2900';
                    return 2900;
                case 100:
                    calc.innerHTML = '3200';
                    return 3200;
                case 110:
                    calc.innerHTML = '3600';
                    return 3600;
            }
        } else if (han.value == 2) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '1600';
                    return 1600;
                case 30:
                    calc.innerHTML = '2000';
                    return 2000;
                case 40:
                    calc.innerHTML = '2600';
                    return 2600;
                case 50:
                    calc.innerHTML = '3200';
                    return 3200;
                case 60:
                    calc.innerHTML = '3900';
                    return 3900;
                case 70:
                    calc.innerHTML = '4500';
                    return 4500;
                case 80:
                    calc.innerHTML = '5200';
                    return 5200;
                case 90:
                    calc.innerHTML = '5800';
                    return 5800;
                case 100:
                    calc.innerHTML = '6400';
                    return 6400;
                case 110:
                    calc.innerHTML = '7100';
                    return 7100;
            }
        } else if (han.value == 3) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '3200';
                    return 3200;
                case 30:
                    calc.innerHTML = '3900';
                    return 3900;
                case 40:
                    calc.innerHTML = '5200';
                    return 5200;
                case 50:
                    calc.innerHTML = '6400';
                    return 6400;
                case 60:
                    calc.innerHTML = '7700';
                    return 7700;
                case 70:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
            }
        } else if (han.value == 4) {
            switch (parseInt(fu.value)) {
                case 20:
                    calc.innerHTML = 'n/a';
                    return 0;
                case 25:
                    calc.innerHTML = '6400';
                    return 6400;
                case 30:
                    calc.innerHTML = '7700';
                    return 7700;
                case 40:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 50:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 60:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 70:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 80:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 90:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 100:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
                case 110:
                    calc.innerHTML = 'Mangan 8000';
                    return 8000;
            }
        } else if (han.value == 5) {
            calc.innerHTML = 'Mangan 8000';
            return 8000;
        } else if (han.value == 6) {
            calc.innerHTML = 'Haneman 12000';
            return 12000;
        } else if (han.value == 7) {
            calc.innerHTML = 'Haneman 12000';
            return 12000;
        } else if (han.value == 8) {
            calc.innerHTML = 'Baiman 16000';
            return 16000;
        } else if (han.value == 9) {
            calc.innerHTML = 'Baiman 16000';
            return 16000;
        } else if (han.value == 10) {
            calc.innerHTML = 'Baiman 16000';
            return 16000;
        } else if (han.value == 11) {
            calc.innerHTML = 'Sanbaiman 24000';
            return 24000;
        } else if (han.value == 12) {
            calc.innerHTML = 'Sanbaiman 24000';
            return 24000;
        } else if (han.value == 13) {
            calc.innerHTML = 'Yakuman 32000';
            return 32000;
        }
    }
}

// let updateCalc = () => {
//     calc.innerHTML = calcPoint();
// }

let updateApplyActivate = () => {
    if (updateApply.checked) {
        document.getElementById('updateApplyHidden').disabled = true;
        document.getElementById('matchinfo').submit();
    }
}

let updateRiichiActivate = () => {
    if (updateRiichi.checked) {
        document.getElementById('updateRiichiHidden').disabled = true;
        document.getElementById('matchinfo').submit();
    }
}

let oyaChecker = () => {
    for (let n of playerName) {
        if (agari.value == n.value) {
            return n.parentElement.parentElement.parentElement.children[4].children[0].children[0].children[0].checked;
        }
    }
}

let nameErrorShown = false;
let pointsErrorShown = false;
let toolContainer = document.querySelector('.toolContainer');
let errorDiv = document.createElement('div');
errorDiv.classList.add('errorMessage');

let applyPoints = () => {
    if (agari.value == '') {
        if (!nameErrorShown) {
            let errorMessage = "Name not selected";
            errorDiv.innerHTML = errorMessage;
            toolContainer.append(errorDiv);
            nameErrorShown = true;
        }
    } else if (calc.innerHTML == 'n/a') {
        if (!pointsErrorShown) {
            let pointsErrorMessage = "Points invalid";
            errorDiv.innerHTML = pointsErrorMessage;
            toolContainer.append(errorDiv);
            pointsErrorShown = true;
        }
    } else {
        let arr = Array.from(riichi);
        for (let r of arr) {
            if (r.checked) {
                r.checked = false;
            }
        }
        for (w of waits) {
            w.value = "";
        }
        dora.value = "";
        for (let n of playerName) {
            let target = n.parentElement.parentElement.nextElementSibling.childNodes[1].childNodes[1];
            if (houju.value == "Tsumo") {
                if (oyaChecker()) {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + Math.ceil(calcOyaPoint() / 3 / 100) * 300 + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        target.value = value.toLocaleString();
                    } else {
                        let value = parseInt(target.value.replace(',', '')) - Math.ceil(calcOyaPoint() / 3 / 100) * 100 - honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                        target.value = value.toLocaleString();
                    }
                } else {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + Math.ceil(calcKoPoint() / 2 / 100) * 100 + Math.ceil(calcKoPoint() / 4 / 100) * 100 * 2 + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        target.value = value.toLocaleString();
                    } else if (n.parentElement.parentElement.parentElement.children[4].children[0].children[0].children[0].checked) {
                        let value = parseInt(target.value.replace(',', '')) - Math.ceil(calcKoPoint() / 2 / 100) * 100 - honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                        target.value = value.toLocaleString();
                    } else {
                        let value = parseInt(target.value.replace(',', '')) - Math.ceil(calcKoPoint() / 4 / 100) * 100 - honba.valueAsNumber * parseInt(honbaPoints.value) / 3;
                        target.value = value.toLocaleString();
                    }
                }
            } else {
                if (oyaChecker()) {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + calcOyaPoint() + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        target.value = value.toLocaleString();
                    } else if (houju.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) - calcOyaPoint() - honba.valueAsNumber * parseInt(honbaPoints.value);
                        target.value = value.toLocaleString();
                    }
                } else {
                    if (agari.value == '') {
                        break;
                    } else if (agari.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) + calcKoPoint() + honba.valueAsNumber * parseInt(honbaPoints.value) + kyotaku.valueAsNumber * 1000;
                        target.value = value.toLocaleString();
                    } else if (houju.value == n.value) {
                        let value = parseInt(target.value.replace(',', '')) - calcKoPoint() - honba.valueAsNumber * parseInt(honbaPoints.value);
                        target.value = value.toLocaleString();
                    }
                }
            }
        }
        kyotaku.value = 0;
        if (oyaChecker()) {
            honba.valueAsNumber++;
        } else {
            for (let i = 0; i < oyaMarker.length; i++) {
                if (oyaMarker[i].checked) {
                    if (i == 3) {
                        oyaMarker[0].checked = true;
                        if (wind.value == 'EAST' && round[3].checked) {
                            wind.value = 'SOUTH'
                            round[0].checked = true;
                        } else if (wind.value == 'SOUTH' && round[3].checked) {
                            break;
                        } else {
                            let arr = Array.from(round);
                            let current = arr.indexOf(arr.find(x => x.checked == true));
                            arr[current + 1].checked = true;
                        }
                        break;
                    } else {
                        oyaMarker[i + 1].checked = true;
                        if (wind.value == 'EAST' && round[3].checked) {
                            wind.value = 'SOUTH'
                            round[0].checked = true;
                        } else if (wind.value == 'SOUTH' && round[3].checked) {
                            break;
                        } else {
                            let arr = Array.from(round);
                            let current = arr.indexOf(arr.find(x => x.checked == true));
                            arr[current + 1].checked = true;
                        }
                        break;
                    }
                }
            }
        }
        if (updateRiichi.checked) {
            document.getElementById('updateRiichiHidden').disabled = true;
        }
        updateApplyActivate();
    }
}

applyButton.addEventListener('click', applyPoints);

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
    let arr = Array.from(riichi);
    for (let r of arr) {
        if (r.checked) {
            r.checked = false;
            let target = r.parentElement.parentElement.parentElement.parentElement.children[2].children[0].children[0];
            let value = parseInt(target.value.replace(',', '')) + 1000;
            target.value = value.toLocaleString();
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
    $('.lowerContainer input[type=checkbox]').on('change', function () {
        if (this.checked == true) {
            let target = document.getElementById($(this)[0].value);
            let value = parseInt(target.value.replace(',', ''));
            kyotaku.valueAsNumber++
            value -= 1000;
            target.value = value.toLocaleString();
            updatePoints(points);
        }
        if (document.getElementById('updateApply').checked) {
            document.getElementById('updateApplyHidden').disabled = true;
        }
        updateRiichiActivate();
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
    $('#han').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint();
        } else {
            calcKoPoint();
        }
    });
    $('#fu').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint();
        } else {
            calcKoPoint();
        }
    });
    $('#agari').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint();
        } else {
            calcKoPoint();
        }
        for (let i = 0; i < houju.options.length; i++) {
            if (agari.value == houju.options[i].value) {
                houju.options[i].hidden = true;
            } else {
                houju.options[i].hidden = false;
            }
        }
    });
    $('#houju').on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint();
        } else {
            calcKoPoint();
        }
        for (let i = 1; i < agari.options.length; i++) {
            if (houju.value == agari.options[i].value) {
                agari.options[i].hidden = true;
            } else {
                agari.options[i].hidden = false;
            }
        }
    });
    $(oyaMarker).on('change', function () {
        if (oyaChecker()) {
            calcOyaPoint();
        } else {
            calcKoPoint();
        }
    });
});

form.addEventListener('submit', () => {
    if (document.getElementById('updateApply').checked) {
        document.getElementById('updateApplyHidden').disabled = true;
    }
    if (document.getElementById('updateRiichi').checked) {
        document.getElementById('updateRiichiHidden').disabled = true;
    }
});