"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class DefaultRouter {
    constructor() {
        this.get = (req, res, next) => {
            res.status(200).send("from Angular");
        };
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', this.get);
    }
}
exports.DefaultRouter = DefaultRouter;
// Create the DefaultRouter, and export its configured Express.Router
const defaultRouter = new DefaultRouter();
exports.default = defaultRouter.router;
