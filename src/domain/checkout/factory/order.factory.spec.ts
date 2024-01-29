import { v4 as uuid } from "uuid";
import OrderFactory from "./order.factory";

describe("Order factory unit tests", () => {
    it("should create an order", () => {
        const orderProperties = {
            id: uuid(),
            customerId: uuid(),
            items: [
                {
                    id: uuid(),
                    name: "Product 1",
                    price: 10,
                    productId: uuid(),
                    quantity: 1
                }
            ]
        };

        const order = OrderFactory.create(orderProperties);

        expect(order.id).toBe(orderProperties.id);
        expect(order.items.length).toBe(1);
        expect(order.customerId).toEqual(orderProperties.customerId);

    });
});