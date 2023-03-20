require('dotenv').config(); 

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL ;
// const { v4: uuid } = require('uuid');

const Match = require('./models/match');
const Team = require('./models/team');
const Member = require('./models/member');

const io = require("socket.io")(3001, {
    cors: {
    //   origin: "https://nleagueoverlay.onrender.com",
        origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });


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

// let matchinfo = [
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
    res.render('n_league_score_overlay');
})

app.get('/overlay/:id', async (req, res) => {
    const { id } = req.params;
    const detail = await Match.findById(id);
    const teamE = await Team.findOne({team: detail.teamE});
    const teamS = await Team.findOne({team: detail.teamS});
    const teamW = await Team.findOne({team: detail.teamW});
    const teamN = await Team.findOne({team: detail.teamN});
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
    req.body.dora = req.body.dora.split(',').map(s=>s.trim());
    req.body.waitsE = req.body.waitsE.split(',').map(s=>s.trim());
    req.body.waitsS = req.body.waitsS.split(',').map(s=>s.trim());
    req.body.waitsW = req.body.waitsW.split(',').map(s=>s.trim());
    req.body.waitsN = req.body.waitsN.split(',').map(s=>s.trim());
    const detail = await Match.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/matchinfo/${detail._id}/edit`);
})

// app.patch('/matchinfo/:id', (req, res) => {
//     const { id } = req.params;
//     let newMatchInfo = req.body;
//     let detail = matchinfo.find(e => e.id === id);
//     detail = newMatchInfo;
//     res.redirect('/matchinfo');
// })

app.delete('/matchinfo/:id', async (req, res) => {
    const { id } = req.params;
    await Match.findByIdAndDelete(id);
    res.redirect('/matchinfo');
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serving on port ${port}!`);
});

io.on('connection', socket => {
    console.log(socket.id);
});
