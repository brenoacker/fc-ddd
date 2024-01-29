import { Sequelize } from "sequelize-typescript";
import Address from "../../../../domain/customer/value-object/address";
import Customer from "../../../../domain/customer/entity/customer";
import CustomerModel from "./customer.model";
import CustomerRepository from "./customer.repository";
import ProductModel from "../../../product/repository/sequelize/product.model";

describe("Customer Repository test", () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });
        sequelize.addModels([CustomerModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });
    
    it("should create a customer", async () => {
       const customerRepository = new CustomerRepository();
       const customer = new Customer("1", "Customer 1");
       const address = new Address("Street 1", 1, "12345", "City 1");
       customer.changeAddress(address);
       await customerRepository.create(customer);

       const customerModel = await CustomerModel.findOne({ where: { id: "1" } });
       
       expect(customerModel?.toJSON()).toStrictEqual({
              id: customer.id,
              name: customer.name,
              isActive: customer.isActive,
              rewardPoints: customer.rewardPoints,
              street: customer.address.street,
              number: customer.address.number,
              zipCode: customer.address.zipCode,
              city: customer.address.city
         });
    });

    it("should update a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 1, "12345", "City 1");
        customer.changeAddress(address);
        await customerRepository.create(customer);
 
        customer.changeName("Customer 2");
        customer.activate();
        customer.changeAddress(new Address("Street 2", 2, "54321", "City 2"));
        await customerRepository.update(customer);
 
        const customerModel = await CustomerModel.findOne({ where: { id: "1" } });
        
        expect(customerModel?.toJSON()).toStrictEqual({
               id: customer.id,
               name: customer.name,
               isActive: customer.isActive,
               rewardPoints: customer.rewardPoints,
               street: customer.address.street,
               number: customer.address.number,
               zipCode: customer.address.zipCode,
               city: customer.address.city
          });
     });

     it("should throw an error when a customer is not found", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 1, "12345", "City 1");
        customer.changeAddress(address);
        await customerRepository.create(customer);
 
        await expect(customerRepository.find("2")).rejects.toThrow("Customer not found");
     });

     it("should find a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 1, "12345", "City 1");
        customer.changeAddress(address);
        await customerRepository.create(customer);
 
        const customerFound = await customerRepository.find("1");
        
        expect(customerFound).toStrictEqual(customer);
     });

     it("should find all customers", async () => {
        const customerRepository = new CustomerRepository();
        const customer1 = new Customer("1", "Customer 1");
        const address1 = new Address("Street 1", 1, "12345", "City 1");
        customer1.changeAddress(address1);
        await customerRepository.create(customer1);

        const customer2 = new Customer("2", "Customer 2");
        const address2 = new Address("Street 2", 2, "54321", "City 2");
        customer2.changeAddress(address2);
        await customerRepository.create(customer2);
 
        const customers = await customerRepository.findAll();
        
        expect(customers).toStrictEqual([customer1, customer2]);
     });


});