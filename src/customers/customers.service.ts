import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto';

@Injectable()
export class CustomersService {

    private customers = [
        {
            id: 1,
            email: "customer1@test.com",
            name: "customer customer1"
        },
        {
            id: 2,
            email: "customer2@test.com",
            name: "customer customer2"
        },
        {
            id: 3,
            email: "customer3@test.com",
            name: "customer customer3"
        },
    ]

    getCustomers(){
        return this.customers
    }

    findCustomerById(id: number){
        return this.customers.find(user => user.id === id)
    }

    createCustomer(customerDto: CreateCustomerDto){
        this.customers.push(customerDto);
    }
}
