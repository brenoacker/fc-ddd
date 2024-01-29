export default class Address {
    _street: string;
    _number: number;
    _zipCode: string;
    _city: string;

    constructor(street: string, number: number, zipCode: string, city: string) {
        this._street = street;
        this._number = number;
        this._zipCode = zipCode;
        this._city = city;
        this.validate();
    }

    get street(): string {
        return this._street;
    }

    get number(): number {
        return this._number;
    }

    get zipCode(): string {
        return this._zipCode;
    }

    get city(): string {
        return this._city;
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