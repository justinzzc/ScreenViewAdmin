import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PageVersionCreateNestedManyWithoutPagesInput } from "./PageVersionCreateNestedManyWithoutPagesInput";

export type PageCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  name?: string | null;
  pageSchema?: string | null;
  pageVersions?: PageVersionCreateNestedManyWithoutPagesInput;
};
