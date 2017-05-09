"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let _schema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String
    },
});
exports.Item = mongoose.model('Item', _schema);
