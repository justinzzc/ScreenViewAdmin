import { ApplicationVersionWhereUniqueInput } from "../applicationVersion/ApplicationVersionWhereUniqueInput";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type PageVersionUpdateInput = {
  applicationVersion?: ApplicationVersionWhereUniqueInput | null;
  page?: PageWhereUniqueInput | null;
  versionSchema?: string | null;
};
