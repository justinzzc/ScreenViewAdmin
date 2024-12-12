import { Application } from "../application/Application";
import { PageVersion } from "../pageVersion/PageVersion";

export type ApplicationVersion = {
  application?: Application | null;
  createdAt: Date;
  id: string;
  pageVersions?: Array<PageVersion>;
  releaseDate: Date | null;
  updatedAt: Date;
  versionDescription: string | null;
  versionName: string | null;
};
