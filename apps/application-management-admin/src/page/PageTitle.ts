import { Page as TPage } from "../api/page/Page";

export const PAGE_TITLE_FIELD = "name";

export const PageTitle = (record: TPage): string => {
  return record.name?.toString() || String(record.id);
};
