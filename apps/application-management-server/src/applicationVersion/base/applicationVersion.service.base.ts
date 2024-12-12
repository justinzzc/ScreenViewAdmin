/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ApplicationVersion as PrismaApplicationVersion,
  PageVersion as PrismaPageVersion,
  Application as PrismaApplication,
} from "@prisma/client";

export class ApplicationVersionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ApplicationVersionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.applicationVersion.count(args);
  }

  async applicationVersions(
    args: Prisma.ApplicationVersionFindManyArgs
  ): Promise<PrismaApplicationVersion[]> {
    return this.prisma.applicationVersion.findMany(args);
  }
  async applicationVersion(
    args: Prisma.ApplicationVersionFindUniqueArgs
  ): Promise<PrismaApplicationVersion | null> {
    return this.prisma.applicationVersion.findUnique(args);
  }
  async createApplicationVersion(
    args: Prisma.ApplicationVersionCreateArgs
  ): Promise<PrismaApplicationVersion> {
    return this.prisma.applicationVersion.create(args);
  }
  async updateApplicationVersion(
    args: Prisma.ApplicationVersionUpdateArgs
  ): Promise<PrismaApplicationVersion> {
    return this.prisma.applicationVersion.update(args);
  }
  async deleteApplicationVersion(
    args: Prisma.ApplicationVersionDeleteArgs
  ): Promise<PrismaApplicationVersion> {
    return this.prisma.applicationVersion.delete(args);
  }

  async findPageVersions(
    parentId: string,
    args: Prisma.PageVersionFindManyArgs
  ): Promise<PrismaPageVersion[]> {
    return this.prisma.applicationVersion
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pageVersions(args);
  }

  async getApplication(parentId: string): Promise<PrismaApplication | null> {
    return this.prisma.applicationVersion
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
