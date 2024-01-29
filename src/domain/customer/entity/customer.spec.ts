import Customer from './customer';
import Address from '../value-object/address';
describe('Customer unit tests', () => {

    it('should throw error when id is empty', () => {
        expect(() => {
            new Customer("", "John Doe");
        }).toThrowError("Invalid customer id");
    });

    it('should throw error when name is empty', () => {
        expect(() => {
            new Customer("123", "");
        }).toThrowError("Invalid customer name");
    });

    it('should throw error when street is empty', () => {
        expect(() => {
            new Address("", 2, "12345-678","São Paulo");
        }).toThrowError("Invalid street");
    });

    it('should throw error when number is invalid', () => {
        expect(() => {
            new Address("Rua dos Bobos", 0, "12345-678","São Paulo");
        }).toThrowError("Invalid number");
    });

    it('should throw error when zip code is empty', () => {
        expect(() => {
            new Address("Rua dos Bobos", 2, "","São Paulo");
        }).toThrowError("Invalid zip code");
    });

    it('should throw error when city is empty', () => { 
        expect(() => {
            new Address("Rua dos Bobos", 2, "12345-678","");
        }).toThrowError("Invalid city");
    });

    it('should change name', () => {
        const customer = new Customer("123", "John Doe");
        customer.changeName("John Doe 2");
        expect(customer.name).toBe("John Doe 2");
    });

    it('should throw error when address is not set', () => {
        expect(() => {
            const customer = new Customer("123", "John Doe");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });

    it('should activate customer', () => {
        const customer = new Customer("123", "John Doe");
        const address = new Address("Rua dos Bobos", 2, "12345-678","São Paulo");
        customer.changeAddress(address);

        customer.activate();

        expect(customer.isActive).toBeTruthy();
    });

    it('should deactivate customer', () => {
        const customer = new Customer("123", "John Doe");
        customer.deactivate();
        expect(customer.isActive).toBeFalsy();
    });

    it('should add reward points', () => {
        const customer = new Customer("123", "John Doe");
        expect(customer.rewardPoints).toBe(0);
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    });
    
});
