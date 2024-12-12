import { ApplicationTag as TApplicationTag } from "../api/applicationTag/ApplicationTag";

export const APPLICATIONTAG_TITLE_FIELD = "name";

export const ApplicationTagTitle = (record: TApplicationTag): string => {
  return record.name?.toString() || String(record.id);
};
