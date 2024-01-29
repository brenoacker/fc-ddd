"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(street, number, zipCode, city) {
        this._street = street;
        this._number = number;
        this._zipCode = zipCode;
        this._city = city;
        this.validate();
    }
    validate() {
        if (this._street.length === 0) {
            throw new Error("Invalid street");
        }
        if (this._number <= 0) {
            throw new Error("Invalid number");
        }
        if (this._zipCode.length === 0) {
            throw new Error("Invalid zip code");
        }
        if (this._city.length === 0) {
            throw new Error("Invalid city");
        }
    }
}
exports.default = Address;
