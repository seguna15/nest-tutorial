import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, ValidateNested,  } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";
import { Type } from "class-transformer";


export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  //validating nested objects
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto) //Provide type to validated nested objects
  address: CreateAddressDto;
}