const mongoose = require('mongoose');

fetch('https://konkursas.kitm.lt/821394/task_addons')
    .then(res => res.json())


// Probably mongoose import stuff
// uncommeting required keeps crashing. Dont know why
const TravelsSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 255
    },
    address: {
        type: String,
        maxLength: 255

    },
    latitude: {
        type: Number,
        // required: true
    },
    longitude: {
        type: Number,
        // required: true
    },
    description: {
        type: String,
        maxLength: 5000
    },
    rating: {
        type: Number,
        minLength: 1,
        maxLength: 5,
        default: 0
    }
})

const Travel = mongoose.model('Travel', TravelsSchema);

module.exports = Travel;
