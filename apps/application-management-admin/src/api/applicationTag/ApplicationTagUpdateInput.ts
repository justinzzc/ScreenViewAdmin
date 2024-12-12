import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ApplicationTagUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  name?: string | null;
};
