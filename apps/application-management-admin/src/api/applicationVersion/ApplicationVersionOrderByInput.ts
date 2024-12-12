import { SortOrder } from "../../util/SortOrder";

export type ApplicationVersionOrderByInput = {
  applicationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  releaseDate?: SortOrder;
  updatedAt?: SortOrder;
  versionDescription?: SortOrder;
  versionName?: SortOrder;
};
