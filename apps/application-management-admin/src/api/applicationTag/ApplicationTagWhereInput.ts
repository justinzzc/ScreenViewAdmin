import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ApplicationTagWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
