import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit tests", () => {

    it("should create a customer", () => {
        const customer = CustomerFactory.create("Breno");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Breno");
        expect(customer.address).toBeUndefined();
        expect(customer.isActive).toBeFalsy();
        expect(customer.rewardPoints).toBe(0);
        
    });

    it("should create a customer with an address", () => {
        const address = new Address("Rua dos Bobos", 2, "12345-678", "São Paulo");
        const customer = CustomerFactory.createWithAddress("Breno", address);

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Breno");
        expect(customer.address).toBeDefined();
        expect(customer.address.street).toBe("Rua dos Bobos");
        expect(customer.address.number).toBe(2);
        expect(customer.address.zipCode).toBe("12345-678");
        expect(customer.address.city).toBe("São Paulo");

        expect(customer.isActive).toBeFalsy();
        expect(customer.rewardPoints).toBe(0);
        
    });

});