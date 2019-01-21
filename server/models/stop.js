let mongoose = require('mongoose');

let Stop = mongoose.model('Stop', {
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    imgPath: {
        type: String,
        required: true
    },
    quest: {
        type: Quest,
        required: false,
        default: null
    }
});

module.exports = {Stop}