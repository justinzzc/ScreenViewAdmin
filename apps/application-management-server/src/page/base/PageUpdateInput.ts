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
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PageVersionUpdateManyWithoutPagesInput } from "./PageVersionUpdateManyWithoutPagesInput";

@InputType()
class PageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicationWhereUniqueInput)
  @IsOptional()
  @Field(() => ApplicationWhereUniqueInput, {
    nullable: true,
  })
  application?: ApplicationWhereUniqueInput | null;

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
  name?: string | null;

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
  pageSchema?: string | null;

  @ApiProperty({
    required: false,
    type: () => PageVersionUpdateManyWithoutPagesInput,
  })
  @ValidateNested()
  @Type(() => PageVersionUpdateManyWithoutPagesInput)
  @IsOptional()
  @Field(() => PageVersionUpdateManyWithoutPagesInput, {
    nullable: true,
  })
  pageVersions?: PageVersionUpdateManyWithoutPagesInput;
}

export { PageUpdateInput as PageUpdateInput };
