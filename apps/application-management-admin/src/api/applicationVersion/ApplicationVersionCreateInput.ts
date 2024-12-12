import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PageVersionCreateNestedManyWithoutApplicationVersionsInput } from "./PageVersionCreateNestedManyWithoutApplicationVersionsInput";

export type ApplicationVersionCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  pageVersions?: PageVersionCreateNestedManyWithoutApplicationVersionsInput;
  releaseDate?: Date | null;
  versionDescription?: string | null;
  versionName?: string | null;
};
