import Customer from "../entity/customer";
import RepositoryInterface from "../../entity/repository/repository-interface";

export default interface CustomerRepositoryInterface extends RepositoryInterface<Customer>{}