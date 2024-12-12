import { ApplicationVersionWhereInput } from "./ApplicationVersionWhereInput";
import { ApplicationVersionOrderByInput } from "./ApplicationVersionOrderByInput";

export type ApplicationVersionFindManyArgs = {
  where?: ApplicationVersionWhereInput;
  orderBy?: Array<ApplicationVersionOrderByInput>;
  skip?: number;
  take?: number;
};
