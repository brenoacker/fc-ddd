"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, name) {
        this._isActive = false;
        this._id = id;
        this._name = name;
        this.validate();
    }
    get name() {
        return this._name;
    }
    get isActive() {
        return this._isActive;
    }
    validate() {
        if (this._name.length === 0) {
            throw new Error("Invalid customer name");
        }
        if (this._id.length === 0) {
            throw new Error("Invalid customer id");
        }
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._isActive = true;
    }
    deactivate() {
        this._isActive = false;
    }
    set Address(address) {
        this._address = address;
    }
}
exports.default = Customer;
