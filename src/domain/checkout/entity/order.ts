import OrderItem from "./order_item";

export default class Order {

    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.Total();
        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get customerId(): string {
        return this._customerId;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    get total(): number {
        return this._total;
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

    Total(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

}