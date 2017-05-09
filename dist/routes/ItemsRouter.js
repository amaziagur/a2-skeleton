"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Item_1 = require("./Item");
class ItemsRouter {
    constructor() {
        this.getAll = (req, res, next) => {
            Item_1.Item.find({}).exec((err, result) => {
                res.send(200, result);
            });
        };
        this.add = (req, res, next) => {
            new Item_1.Item({ title: req.body.value }).save();
            res.sendStatus(201);
        };
        this.deleteAll = (req, res, next) => {
            Item_1.Item.remove({}, () => {
                res.sendStatus(200);
            });
        };
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.add);
        this.router.delete('/', this.deleteAll);
    }
}
exports.ItemsRouter = ItemsRouter;
// Create the ItemsRouter, and export its configured Express.Router
const itemsRouter = new ItemsRouter();
exports.default = itemsRouter.router;
