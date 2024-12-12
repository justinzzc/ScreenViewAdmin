import { ApplicationVersion as TApplicationVersion } from "../api/applicationVersion/ApplicationVersion";

export const APPLICATIONVERSION_TITLE_FIELD = "versionName";

export const ApplicationVersionTitle = (
  record: TApplicationVersion
): string => {
  return record.versionName?.toString() || String(record.id);
};
