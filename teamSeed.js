require('dotenv').config();
const mongoose = require('mongoose');
const Team = require('./models/team');
const dbUrl = process.env.DB_URL ;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch((err => {
        console.log("Connection Error");
        console.log(err);
    }));



const team1 = new Team({
    team: "Destroyers",
    members: ["Amy G.", "Julian A.", "Michael W."],
    score: -111.2,
    game: 8,
    logo: "destroyers"
})
const team2 = new Team({
    team: "Rinshan Kaibros",
    members: ["Andre C.", "Vinny T.", "Samuel D."],
    score: -416.3,
    game: 8,
    logo: "rinshankaibros"
})
const team3 = new Team({
    team: "Brooklyn Sours",
    members: ["Vince C.", "Wei W.", "Calvin C."],
    score: 136.5,
    game: 10,
    logo: "brooklynSours"
})
const team4 = new Team({
    team: "Opie Dopes",
    members: ["Christopher L.", "Nicholas N.", "David C."],
    score: -190.1,
    game: 8,
    logo: "opieDopes"
})
const team5 = new Team({
    team: "The Emperor Penguins",
    members: ["Pio Y.", "Jason Q.", "Damian M."],
    score: 2.7,
    game: 10,
    logo: "emperorPenguins"
})
const team6 = new Team({
    team: "Queens Mahjong Triad",
    members: ["Josh K.", "Erik K.", "Christian M."],
    score: 443.1,
    game: 8,
    logo: "queensMahjongTriad"
})
const team7 = new Team({
    team: "Team Yakumen",
    members: ["Kevin N.", "Quincy H.", "Honver L."],
    score: -52.6,
    game: 10,
    logo: "teamYakumen"
})
const team8 = new Team({
    team: "The Peregrine FalkKANs",
    members: ["Claire P.", "Andrew H.", "Mike V."],
    score: 183.9,
    game: 10,
    logo: "spaceFalcon"
})

Team.insertMany([team1, team2, team3, team4, team5, team6, team7, team8])
    .then(m => {
        console.log(m);
    })
    .catch(e => {
        console.log(e);
    })