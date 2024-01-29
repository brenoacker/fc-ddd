import Address from "../value-object/address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _isActive: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get id(): string {
        return this._id;
    }

    get address(): Address {
        return this._address;
    }

    get isActive(): boolean {
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

    changeName(name: string) {
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

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    changeAddress(address: Address) {
        this._address = address;
    }


}