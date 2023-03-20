const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    team: String,
    points: Number
})

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;