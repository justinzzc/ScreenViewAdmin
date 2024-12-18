/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicationVersionWhereInput } from "./ApplicationVersionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ApplicationVersionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ApplicationVersionWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationVersionWhereInput)
  @IsOptional()
  @Field(() => ApplicationVersionWhereInput, {
    nullable: true,
  })
  every?: ApplicationVersionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationVersionWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationVersionWhereInput)
  @IsOptional()
  @Field(() => ApplicationVersionWhereInput, {
    nullable: true,
  })
  some?: ApplicationVersionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationVersionWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationVersionWhereInput)
  @IsOptional()
  @Field(() => ApplicationVersionWhereInput, {
    nullable: true,
  })
  none?: ApplicationVersionWhereInput;
}
export { ApplicationVersionListRelationFilter as ApplicationVersionListRelationFilter };
