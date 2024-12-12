import { Application } from "../application/Application";

export type ApplicationTag = {
  application?: Application | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
