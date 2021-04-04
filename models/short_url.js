const mongoose = require('mongoose');
const short_id = require('shortid');

const ShortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true
    },
    short_url: {
        type: String,
        reqired: true,
        default: short_id.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('short_url', ShortUrlSchema)
