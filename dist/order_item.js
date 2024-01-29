"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(id, name, price, productId, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
        this.validate();
    }
    get price() {
        return this._price * this._quantity;
    }
    get productId() {
        return this._productId;
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Invalid order item id");
        }
        if (this._name.length === 0) {
            throw new Error("Invalid order item name");
        }
        if (this._price < 0) {
            throw new Error("Invalid order item price");
        }
        if (this._quantity <= 0) {
            throw new Error("Invalid order item quantity");
        }
    }
}
exports.default = OrderItem;
