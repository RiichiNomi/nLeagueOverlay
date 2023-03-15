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
    dora: { 
        type: String,
        lowercase: true
    },
    shinDora: {
        type:String,
        default: ""
    },
    shinDora2: {
        type:String,
        default: ""
    },
    shinDora3: {
        type:String,
        default: ""
    },
    teamE: String,
    nameE: String,
    pointsE: String,
    waitsE:  [String],
    teamS: String,
    nameS: String,
    pointsS: String,
    waitsS: [String],
    teamW: String,
    nameW: String,
    pointsW: String,
    waitsW: [String],
    teamN: String,
    nameN: String,
    pointsN: String,
    waitsN: [String],
    oya: String
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;