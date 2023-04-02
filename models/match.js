const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    id: String,
    timestamp: String,
    week: Number,
    game: Number,
    date: String,
    wind: {
        type: String,
        uppercase: true
    },
    round: Number,
    kyotaku: Number,
    honba: Number,
    honbaPoints: Number,
    dora: [String],
    formattedDora: [String],
    teamE: String,
    nameE: String,
    pointsE: String,
    riichiE: String,
    waitsE:  [String],
    formattedWaitsE: [String],
    teamS: String,
    nameS: String,
    pointsS: String,
    riichiS: String,
    waitsS: [String],
    formattedWaitsS: [String],
    teamW: String,
    nameW: String,
    pointsW: String,
    riichiW: String,
    waitsW: [String],
    formattedWaitsW: [String],
    teamN: String,
    nameN: String,
    pointsN: String,
    riichiN: String,
    waitsN: [String],
    formattedWaitsN: [String],
    oya: String,
    updateApply: [String]
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;