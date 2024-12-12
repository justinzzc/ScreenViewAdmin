import { ApplicationVersionWhereUniqueInput } from "../applicationVersion/ApplicationVersionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PageVersionWhereInput = {
  applicationVersion?: ApplicationVersionWhereUniqueInput;
  id?: StringFilter;
  page?: PageWhereUniqueInput;
  versionSchema?: StringNullableFilter;
};
