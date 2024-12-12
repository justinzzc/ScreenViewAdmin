import { PageVersionWhereInput } from "./PageVersionWhereInput";
import { PageVersionOrderByInput } from "./PageVersionOrderByInput";

export type PageVersionFindManyArgs = {
  where?: PageVersionWhereInput;
  orderBy?: Array<PageVersionOrderByInput>;
  skip?: number;
  take?: number;
};
