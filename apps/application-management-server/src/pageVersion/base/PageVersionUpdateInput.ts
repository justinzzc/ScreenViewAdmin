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
import { ApplicationVersionWhereUniqueInput } from "../../applicationVersion/base/ApplicationVersionWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";

@InputType()
class PageVersionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicationVersionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicationVersionWhereUniqueInput)
  @IsOptional()
  @Field(() => ApplicationVersionWhereUniqueInput, {
    nullable: true,
  })
  applicationVersion?: ApplicationVersionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PageWhereUniqueInput)
  @IsOptional()
  @Field(() => PageWhereUniqueInput, {
    nullable: true,
  })
  page?: PageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  versionSchema?: string | null;
}

export { PageVersionUpdateInput as PageVersionUpdateInput };