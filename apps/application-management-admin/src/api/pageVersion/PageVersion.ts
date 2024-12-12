import { ApplicationVersion } from "../applicationVersion/ApplicationVersion";
import { Page } from "../page/Page";

export type PageVersion = {
  applicationVersion?: ApplicationVersion | null;
  createdAt: Date;
  id: string;
  page?: Page | null;
  updatedAt: Date;
  versionSchema: string | null;
};
