"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerId, items) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Invalid order id");
        }
        if (this._customerId.length === 0) {
            throw new Error("Invalid customer id");
        }
        if (this._items.length === 0) {
            throw new Error("Invalid order items");
        }
        if (this._items.length !== new Set(this._items.map(item => item.productId)).size) {
            throw new Error("Duplicated order item");
        }
        if (this._total <= 0) {
            throw new Error("Invalid order total");
        }
    }
    total() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
}
exports.default = Order;
