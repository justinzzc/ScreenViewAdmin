import { ApplicationTag } from "../applicationTag/ApplicationTag";
import { ApplicationVersion } from "../applicationVersion/ApplicationVersion";
import { Page } from "../page/Page";
import { JsonValue } from "type-fest";

export type Application = {
  applicationTags?: Array<ApplicationTag>;
  applicationVersions?: Array<ApplicationVersion>;
  createdAt: Date;
  id: string;
  name: string | null;
  pages?: Array<Page>;
  screenshot: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
