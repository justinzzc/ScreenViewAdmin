import { ApplicationTagUpdateManyWithoutApplicationsInput } from "./ApplicationTagUpdateManyWithoutApplicationsInput";
import { ApplicationVersionUpdateManyWithoutApplicationsInput } from "./ApplicationVersionUpdateManyWithoutApplicationsInput";
import { PageUpdateManyWithoutApplicationsInput } from "./PageUpdateManyWithoutApplicationsInput";
import { InputJsonValue } from "../../types";

export type ApplicationUpdateInput = {
  applicationTags?: ApplicationTagUpdateManyWithoutApplicationsInput;
  applicationVersions?: ApplicationVersionUpdateManyWithoutApplicationsInput;
  name?: string | null;
  pages?: PageUpdateManyWithoutApplicationsInput;
  screenshot?: InputJsonValue;
  status?: "Option1" | null;
};
