"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._price < 0) {
            throw new Error("Price must be greater or equal than 0");
        }
    }
    changePrice(price) {
        this._price = price;
        this.validate();
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
}
exports.default = Product;
