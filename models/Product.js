const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    story: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    inStorage: {
        type: Boolean,
        required: true
    },
    files: [Object]
}, {timestamps: true});

module.exports = mongoose.model('MultipleFile', productSchema);
