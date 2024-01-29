import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
    it("should place an order", () => {
        const customer = new Customer("1", "Customer 1");

        const orderItem = new OrderItem("i1", "Item 1", 10, "p1", 1);
        const order = OrderService.placeOrder(customer, [orderItem]);

        expect(customer.rewardPoints).toBe(5);
        expect(order.total).toBe(10);
    });
    it("should get total of all orders", () => {
        const orderItem = new OrderItem("1", "Product 1", 10, "p1", 1);
        const orderItem2 = new OrderItem("2", "Product 2", 20, "p2", 2);
        const order = new Order("1", "c1", [orderItem]);
        const order2 = new Order("2", "c1", [orderItem2]);
        const total = OrderService.total([order, order2]);

        expect(total).toBe(50);
    });

    it("should throw error when order has no items", () => {
        const customer = new Customer("1", "Customer 1");
        expect(() => {
            OrderService.placeOrder(customer, []);
        }).toThrowError("Order must have at least one item");
    });
});