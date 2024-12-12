import { SortOrder } from "../../util/SortOrder";

export type PageVersionOrderByInput = {
  applicationVersionId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pageId?: SortOrder;
  updatedAt?: SortOrder;
  versionSchema?: SortOrder;
};
