const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true
    },
    members: [String],
    score: Number,
    game: Number,
    logo: String
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;