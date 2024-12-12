/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicationVersionWhereInput } from "./ApplicationVersionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApplicationVersionOrderByInput } from "./ApplicationVersionOrderByInput";

@ArgsType()
class ApplicationVersionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ApplicationVersionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ApplicationVersionWhereInput, { nullable: true })
  @Type(() => ApplicationVersionWhereInput)
  where?: ApplicationVersionWhereInput;

  @ApiProperty({
    required: false,
    type: [ApplicationVersionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ApplicationVersionOrderByInput], { nullable: true })
  @Type(() => ApplicationVersionOrderByInput)
  orderBy?: Array<ApplicationVersionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ApplicationVersionFindManyArgs as ApplicationVersionFindManyArgs };
