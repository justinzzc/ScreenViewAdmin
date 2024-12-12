import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PageVersionUpdateManyWithoutApplicationVersionsInput } from "./PageVersionUpdateManyWithoutApplicationVersionsInput";

export type ApplicationVersionUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  pageVersions?: PageVersionUpdateManyWithoutApplicationVersionsInput;
  releaseDate?: Date | null;
  versionDescription?: string | null;
  versionName?: string | null;
};
