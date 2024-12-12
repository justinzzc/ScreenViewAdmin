import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PageVersionUpdateManyWithoutPagesInput } from "./PageVersionUpdateManyWithoutPagesInput";

export type PageUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  name?: string | null;
  pageSchema?: string | null;
  pageVersions?: PageVersionUpdateManyWithoutPagesInput;
};
