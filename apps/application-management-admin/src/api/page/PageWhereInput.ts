import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageVersionListRelationFilter } from "../pageVersion/PageVersionListRelationFilter";

export type PageWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  pageSchema?: StringNullableFilter;
  pageVersions?: PageVersionListRelationFilter;
};
