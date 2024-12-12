import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  screenshot?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
