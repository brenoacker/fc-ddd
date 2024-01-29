"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./customer"));
const address_1 = __importDefault(require("./address"));
describe('Customer unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            new customer_1.default("", "John Doe");
        }).toThrowError("Invalid customer id");
    });
    it('should throw error when name is empty', () => {
        expect(() => {
            new customer_1.default("123", "");
        }).toThrowError("Invalid customer name");
    });
    it('should throw error when street is empty', () => {
        expect(() => {
            new address_1.default("", 2, "12345-678", "São Paulo");
        }).toThrowError("Invalid street");
    });
    it('should throw error when number is invalid', () => {
        expect(() => {
            new address_1.default("Rua dos Bobos", 0, "12345-678", "São Paulo");
        }).toThrowError("Invalid number");
    });
    it('should throw error when zip code is empty', () => {
        expect(() => {
            new address_1.default("Rua dos Bobos", 2, "", "São Paulo");
        }).toThrowError("Invalid zip code");
    });
    it('should throw error when city is empty', () => {
        expect(() => {
            new address_1.default("Rua dos Bobos", 2, "12345-678", "");
        }).toThrowError("Invalid city");
    });
    it('should change name', () => {
        const customer = new customer_1.default("123", "John Doe");
        customer.changeName("John Doe 2");
        expect(customer.name).toBe("John Doe 2");
    });
    it('should throw error when address is not set', () => {
        expect(() => {
            const customer = new customer_1.default("123", "John Doe");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
    it('should activate customer', () => {
        const customer = new customer_1.default("123", "John Doe");
        const address = new address_1.default("Rua dos Bobos", 2, "12345-678", "São Paulo");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive).toBeTruthy();
    });
    it('should deactivate customer', () => {
        const customer = new customer_1.default("123", "John Doe");
        customer.deactivate();
        expect(customer.isActive).toBeFalsy();
    });
});
