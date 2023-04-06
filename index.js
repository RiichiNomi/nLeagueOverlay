require('dotenv').config();

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
// const { v4: uuid } = require('uuid');

const Match = require('./models/match');
const Team = require('./models/team');
const Member = require('./models/member');



mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch((err => {
        console.log("Connection Error");
        console.log(err);
    }));


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


// const io = require("socket.io")(https://nleagueoverlay.onrender.com/:1, {
//     cors: {
//       origin: "https://nleagueoverlay.onrender.com",
// //         origin: "http://localhost:3000",
//       methods: ["GET", "POST"]
//     }
//   });

// const matchinfo = [
//     {
//         id: uuid(),
//         timestamp: 'March 9th, 2023 - 7:00PM (Sample1)',
//         wind: 'EAST',
//         round: 1,
//         kyotaku: 0,
//         honba: 0,
//         dora: '5z'
//     },
//     {
//         id: uuid(),
//         timestamp: 'March 10th, 2023 - 9:00PM(Sample2)',
//         wind: 'SOUTH',
//         round: 3,
//         kyotaku: 1,
//         honba: 2,
//         dora: '7z'
//     }
// ];

Match.watch().on('change', data => io.emit('change', data));


app.get('/', (req, res) => {
    res.redirect('/matchinfo');
})

app.get('/riichi', async (req, res) => {
    const teaminfo = await Team.find({});
    res.render('riichi', { teaminfo });
})

app.get('/overlay/:id', async (req, res) => {
    const { id } = req.params;
    const detail = await Match.findById(id);
    const teamE = await Team.findOne({ team: detail.teamE });
    const teamS = await Team.findOne({ team: detail.teamS });
    const teamW = await Team.findOne({ team: detail.teamW });
    const teamN = await Team.findOne({ team: detail.teamN });
    res.render('n_league_score_overlay_show', { detail, teamE, teamS, teamW, teamN });
})

app.get('/matchinfo', async (req, res) => {
    const matchinfo = await Match.find({});
    const teaminfo = await Team.find({});
    res.render('matchinfo/index', { matchinfo, teaminfo });
})

app.get('/matchinfo/new', async (req, res) => {
    const teaminfo = await Team.find({});
    res.render('matchinfo/new', { teaminfo });
})

app.post('/matchinfo', async (req, res) => {
    const newMatch = new Match(req.body);
    await newMatch.save();
    // const { timestamp, wind, round, kyotaku, honba, dora } = req.body;
    // matchinfo.push({ id, timestamp, wind, round, kyotaku, honba, dora });
    // const detail = matchinfo.find(e => e.id === id);
    res.redirect(`/matchinfo/${newMatch._id}`);
})

app.get('/matchinfo/:id', async (req, res) => {
    const { id } = req.params;
    const detail = await Match.findById(id);
    res.render('matchinfo/show', { detail });
})

app.get('/matchinfo/:id/edit', async (req, res) => {
    const { id } = req.params;
    const detail = await Match.findById(id);
    const teaminfo = await Team.find({});
    res.render('matchinfo/edit', { detail, teaminfo });
})

app.put('/matchinfo/:id', async (req, res) => {
    const { id } = req.params;
    if (!req.body.riichiE) {
        req.body.riichiE = ""
    }
    if (!req.body.riichiS) {
        req.body.riichiS = ""
    }
    if (!req.body.riichiW) {
        req.body.riichiW = ""
    }
    if (!req.body.riichiN) {
        req.body.riichiN = ""
    }

    const addLetter = (suitNumbers, letter) => {
        const formatted = []
        for (n of suitNumbers) {
            formatted.push(n + letter);
        }
        return formatted;
    }

    const formatWaits = (arr) => {
        const letterPositions = [];
        if (arr.indexOf('m') !== -1) {
            letterPositions.push(arr.indexOf('m'));
        }

        if (arr.indexOf('p') !== -1) {
            letterPositions.push(arr.indexOf('p'));
        }

        if (arr.indexOf('s') !== -1) {
            letterPositions.push(arr.indexOf('s'));
        }

        if (arr.indexOf('z') !== -1) {
            letterPositions.push(arr.indexOf('z'));
        }
        function compareNumbers(a, b) {
            return a - b;
        }
        letterPositions = letterPositions.sort(compareNumbers);
        const formattedWaits = [];
        const firstSuitNumbers = arr.slice(0, letterPositions[0]);
        const firstLetter = arr[letterPositions[0]];
        const firstSuitWaits = addLetter(firstSuitNumbers, firstLetter);
        formattedWaits.push(...firstSuitWaits);
        for (let i = 1; i < letterPositions.length; i++) {
            const followingSuitNumbers = arr.slice(letterPositions[i - 1] + 1, letterPositions[i]);
            const followingLetter = arr[letterPositions[i]];
            const followingSuitWaits = addLetter(followingSuitNumbers, followingLetter);
            formattedWaits.push(...followingSuitWaits);
        }
        return formattedWaits

    }
    const splitDora = req.body.dora.split('').map(s => s.trim());
    req.body.formattedDora = formatWaits(splitDora);
    const splitWaitsE = req.body.waitsE.split('').map(s => s.trim());
    req.body.formattedWaitsE = formatWaits(splitWaitsE);
    const splitWaitsS = req.body.waitsS.split('').map(s => s.trim());
    req.body.formattedWaitsS = formatWaits(splitWaitsS);
    const splitWaitsW = req.body.waitsW.split('').map(s => s.trim());
    req.body.formattedWaitsW = formatWaits(splitWaitsW);
    const splitWaitsN = req.body.waitsN.split('').map(s => s.trim());
    req.body.formattedWaitsN = formatWaits(splitWaitsN);
    const detail = await Match.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    // console.log(detail);
    res.redirect(`/matchinfo/${detail._id}/edit`);
})

// app.patch('/matchinfo/:id', (req, res) => {
//     const { id } = req.params;
//     const newMatchInfo = req.body;
//     const detail = matchinfo.find(e => e.id === id);
//     detail = newMatchInfo;
//     res.redirect('/matchinfo');
// })

app.delete('/matchinfo/:id', async (req, res) => {
    const { id } = req.params;
    await Match.findByIdAndDelete(id);
    res.redirect('/matchinfo');
})



const port = process.env.PORT || 3000;

io.on('connection', socket => {
    console.log(socket.id);
});

server.listen(port, () => {
    console.log(`Serving on port ${port}!`);
});


