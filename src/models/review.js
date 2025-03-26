const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Review import to mognoDB. Will probably do nothing
const ReviewSchema = new Schema({
    place_id: {
        type: String,
    },
    user_name: {
        type: String,
        minlength: 3,
        maxlength: 100
    },
    comment: {
        type: String,
        maxlength: 2000
    },
    rating: {
        type: Number,
        minlength: 1,
        maxlength: 5,
        default: 0
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    }
})

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review