"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const DefaultRouter_1 = require("./routes/DefaultRouter");
const path = require("path");
class server {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/*', (req, res, next) => {
            res.sendFile(path.resolve(__dirname, 'public/index.html'));
        });
        this.express.use('/hello', DefaultRouter_1.default);
        this.express.use('/app', express.static(path.resolve(__dirname, 'public/app')));
        this.express.use('/libs', express.static(path.resolve(__dirname, 'public/libs')));
        this.express.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));
        this.express.use(express.static(path.resolve(__dirname, 'public')));
    }
}
exports.default = new server().express;
