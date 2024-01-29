"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe('Order unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            new order_1.default("", "123", []);
        }).toThrowError("Invalid order id");
    });
    it('should throw error when customer id is empty', () => {
        expect(() => {
            new order_1.default("1", "", []);
        }).toThrowError("Invalid customer id");
    });
    it('should throw error when items is empty', () => {
        expect(() => {
            new order_1.default("1", "123", []);
        }).toThrowError("Invalid order items");
    });
    it('should throw error when total is invalid', () => {
        expect(() => {
            const itemWithZeroPrice = new order_item_1.default("1", "Item 1", 0, "1", 1);
            new order_1.default("1", "123", [itemWithZeroPrice]);
        }).toThrowError("Invalid order total");
    });
    it('should throw error when order item id is invalid', () => {
        expect(() => {
            const itemWithInvalidId = new order_item_1.default("", "Item 1", 10, "1", 1);
            new order_1.default("1", "123", [itemWithInvalidId]);
        }).toThrowError("Invalid order item id");
    });
    it('should throw error when order item name is invalid', () => {
        expect(() => {
            const itemWithInvalidName = new order_item_1.default("1", "", 10, "1", 1);
            new order_1.default("1", "123", [itemWithInvalidName]);
        }).toThrowError("Invalid order item name");
    });
    it('should throw error when order item price is invalid', () => {
        expect(() => {
            const itemWithInvalidPrice = new order_item_1.default("1", "Item 1", -10, "1", 1);
            new order_1.default("1", "123", [itemWithInvalidPrice]);
        }).toThrowError("Invalid order item price");
    });
    it('should calculate total', () => {
        const item1 = new order_item_1.default("1", "Item 1", 10, "1", 2);
        const item2 = new order_item_1.default("2", "Item 2", 20, "2", 2);
        const order = new order_1.default("1", "123", [item1, item2]);
        expect(order.total()).toBe(60);
    });
    it('should throw error when order item is duplicated', () => {
        expect(() => {
            const item1 = new order_item_1.default("1", "Item 1", 10, "1", 1);
            const item2 = new order_item_1.default("1", "Item 1", 10, "1", 1);
            new order_1.default("1", "123", [item1, item2]);
        }).toThrowError("Duplicated order item");
    });
    it('should throw error when order item quantity is less or equal than 0', () => {
        expect(() => {
            new order_item_1.default("1", "Item 1", 10, "1", 0);
        }).toThrowError("Invalid order item quantity");
        expect(() => {
            new order_item_1.default("1", "Item 1", 10, "1", -1);
        }).toThrowError("Invalid order item quantity");
    });
});
