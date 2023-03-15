const mongoose = require('mongoose');
const Match = require('./models/match');
const Team = require('./models/team');

mongoose.connect('mongodb://localhost:27017/nLeague', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch((err => {
        console.log("Connection Error");
        console.log(err);
    }));

const sample1 = new Match({
    timestamp: new Date(),
    week: 10,
    game: 1,
    wind: "east",
    round: 2,
    kyotaku: 0,
    honba: 2,
    dora: "1z"
});

const sample2 = new Match({
    timestamp: new Date(),
    week: 11,
    game: 2,
    wind: "south",
    round: 3,
    kyotaku: 2,
    honba: 1,
    dora: "5m"
})

// Match.insertMany([sample1, sample2])
//     .then(m => {
//         console.log(m);
//     })
//     .catch(e => {
//         console.log(e);
//     })

const team1 = new Team({
    team: "Destroyers",
    members: ["Amy", "Julian", "Michael W"],
    score: -111.2,
    game: 8,
    margin: 58.6,
    logo: "destroyers"
})

team1.save();