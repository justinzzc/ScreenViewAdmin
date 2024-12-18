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
import { PageVersionWhereUniqueInput } from "./PageVersionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PageVersionUpdateInput } from "./PageVersionUpdateInput";

@ArgsType()
class UpdatePageVersionArgs {
  @ApiProperty({
    required: true,
    type: () => PageVersionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PageVersionWhereUniqueInput)
  @Field(() => PageVersionWhereUniqueInput, { nullable: false })
  where!: PageVersionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PageVersionUpdateInput,
  })
  @ValidateNested()
  @Type(() => PageVersionUpdateInput)
  @Field(() => PageVersionUpdateInput, { nullable: false })
  data!: PageVersionUpdateInput;
}

export { UpdatePageVersionArgs as UpdatePageVersionArgs };
