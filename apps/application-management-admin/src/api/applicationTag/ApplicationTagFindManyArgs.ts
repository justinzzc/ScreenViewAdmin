import { ApplicationTagWhereInput } from "./ApplicationTagWhereInput";
import { ApplicationTagOrderByInput } from "./ApplicationTagOrderByInput";

export type ApplicationTagFindManyArgs = {
  where?: ApplicationTagWhereInput;
  orderBy?: Array<ApplicationTagOrderByInput>;
  skip?: number;
  take?: number;
};
