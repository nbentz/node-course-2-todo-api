let mongoose = require('mongoose');
let {RaidBoss} = require('./RaidBoss')

let Gym = mongoose.model('Gym', {
    title: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    team: {
        type: String,
        required: false
    },
    //need to define RaidBoss model
    raidBoss: {
        type: RaidBoss,
        required: true,
        default: null
    }
});

module.exports = {Gym}