import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from './dto';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService){

    }

    @Get()
    getCustomers(){
        return this.customerService.getCustomers();
    }

    // normal express way
    @Get(':id')
    getCustomer( @Param('id', ParseIntPipe) id:number, @Req() req: Request, @Res() res: Response){
        
        const customer = this.customerService.findCustomerById(id);

        if(!customer) return res.status(400).send({message: "Customer not found"})
        if(customer){
            res.send(customer)
        }
    }

    //nestjs way
    @Get('/search/:id')
    searchCustomerById(
        @Param('id', ParseIntPipe)
        id: number
    ){
        const customer = this.customerService.findCustomerById(id);
        if(!customer) throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST)

        return customer;
    }



    @Post('create')
    @UsePipes(ValidationPipe) 
    createCustomer(@Body() createCustomerDto: CreateCustomerDto){
        this.customerService.createCustomer(createCustomerDto)
    }
}
