import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit tests', () => {

    it('should throw error when id is empty', () => {
        expect(() => {
            new Order("", "123", []);
        }).toThrowError("Invalid order id");
    });

    it('should throw error when customer id is empty', () => {
        expect(() => {
            new Order("1", "", []);
        }).toThrowError("Invalid customer id");
    });

    it('should throw error when items is empty', () => {
        expect(() => {
            new Order("1", "123", []);
        }).toThrowError("Invalid order items");
    });

    it('should throw error when total is invalid', () => {
        expect(() => {
            const itemWithZeroPrice = new OrderItem("1", "Item 1", 0, "1", 1);
            new Order("1", "123", [itemWithZeroPrice]);
        }).toThrowError("Invalid order total");
    });

    it('should throw error when order item id is invalid', () => {
        expect(() => {
            const itemWithInvalidId = new OrderItem("", "Item 1", 10, "1", 1);
            new Order("1", "123", [itemWithInvalidId]);
        }).toThrowError("Invalid order item id");
    });

    it('should throw error when order item name is invalid', () => {
        expect(() => {
            const itemWithInvalidName = new OrderItem("1", "", 10, "1", 1);
            new Order("1", "123", [itemWithInvalidName]);
        }).toThrowError("Invalid order item name");
    });

    it('should throw error when order item price is invalid', () => {
        expect(() => {
            const itemWithInvalidPrice = new OrderItem("1", "Item 1", -10, "1", 1);
            new Order("1", "123", [itemWithInvalidPrice]);
        }).toThrowError("Invalid order item price");
    });

    it('should calculate total', () => {
        const item1 = new OrderItem("1", "Item 1", 10, "1", 2);
        const item2 = new OrderItem("2", "Item 2", 20, "2", 2);
        const order = new Order("1", "123", [item1, item2]);
        expect(order.total).toBe(60);
    });

    it('should throw error when order item is duplicated', () => {
        expect(() => {
            const item1 = new OrderItem("1", "Item 1", 10, "1", 1);
            const item2 = new OrderItem("1", "Item 1", 10, "1", 1);
            new Order("1", "123", [item1, item2]);
        }).toThrowError("Duplicated order item");
    });

    it('should throw error when order item quantity is less or equal than 0', () => {
        expect(() => {
            new OrderItem("1", "Item 1", 10, "1", 0);
        }).toThrowError("Invalid order item quantity");
        expect(() => {
            new OrderItem("1", "Item 1", 10, "1", -1);
        }).toThrowError("Invalid order item quantity");
    });

});
