import { ApplicationVersionWhereUniqueInput } from "../applicationVersion/ApplicationVersionWhereUniqueInput";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type PageVersionCreateInput = {
  applicationVersion?: ApplicationVersionWhereUniqueInput | null;
  page?: PageWhereUniqueInput | null;
  versionSchema?: string | null;
};
