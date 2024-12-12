import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PageVersionListRelationFilter } from "../pageVersion/PageVersionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ApplicationVersionWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: StringFilter;
  pageVersions?: PageVersionListRelationFilter;
  releaseDate?: DateTimeNullableFilter;
  versionDescription?: StringNullableFilter;
  versionName?: StringNullableFilter;
};
