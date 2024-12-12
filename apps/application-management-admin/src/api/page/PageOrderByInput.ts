import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  applicationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  pageSchema?: SortOrder;
  updatedAt?: SortOrder;
};
