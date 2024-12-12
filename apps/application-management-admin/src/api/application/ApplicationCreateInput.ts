import { ApplicationTagCreateNestedManyWithoutApplicationsInput } from "./ApplicationTagCreateNestedManyWithoutApplicationsInput";
import { ApplicationVersionCreateNestedManyWithoutApplicationsInput } from "./ApplicationVersionCreateNestedManyWithoutApplicationsInput";
import { PageCreateNestedManyWithoutApplicationsInput } from "./PageCreateNestedManyWithoutApplicationsInput";
import { InputJsonValue } from "../../types";

export type ApplicationCreateInput = {
  applicationTags?: ApplicationTagCreateNestedManyWithoutApplicationsInput;
  applicationVersions?: ApplicationVersionCreateNestedManyWithoutApplicationsInput;
  name?: string | null;
  pages?: PageCreateNestedManyWithoutApplicationsInput;
  screenshot?: InputJsonValue;
  status?: "Option1" | null;
};
