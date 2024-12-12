import { PageVersion as TPageVersion } from "../api/pageVersion/PageVersion";

export const PAGEVERSION_TITLE_FIELD = "id";

export const PageVersionTitle = (record: TPageVersion): string => {
  return record.id?.toString() || String(record.id);
};
