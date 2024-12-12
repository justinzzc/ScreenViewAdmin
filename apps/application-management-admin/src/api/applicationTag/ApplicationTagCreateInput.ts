import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ApplicationTagCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  name?: string | null;
};
