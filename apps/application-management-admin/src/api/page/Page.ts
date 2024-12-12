import { Application } from "../application/Application";
import { PageVersion } from "../pageVersion/PageVersion";

export type Page = {
  application?: Application | null;
  createdAt: Date;
  id: string;
  name: string | null;
  pageSchema: string | null;
  pageVersions?: Array<PageVersion>;
  updatedAt: Date;
};
