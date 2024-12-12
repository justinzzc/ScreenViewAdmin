import { ApplicationTagListRelationFilter } from "../applicationTag/ApplicationTagListRelationFilter";
import { ApplicationVersionListRelationFilter } from "../applicationVersion/ApplicationVersionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ApplicationWhereInput = {
  applicationTags?: ApplicationTagListRelationFilter;
  applicationVersions?: ApplicationVersionListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pages?: PageListRelationFilter;
  screenshot?: JsonFilter;
  status?: "Option1";
};
