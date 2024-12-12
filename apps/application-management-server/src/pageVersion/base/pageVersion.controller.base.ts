/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PageVersionService } from "../pageVersion.service";
import { PageVersionCreateInput } from "./PageVersionCreateInput";
import { PageVersion } from "./PageVersion";
import { PageVersionFindManyArgs } from "./PageVersionFindManyArgs";
import { PageVersionWhereUniqueInput } from "./PageVersionWhereUniqueInput";
import { PageVersionUpdateInput } from "./PageVersionUpdateInput";

export class PageVersionControllerBase {
  constructor(protected readonly service: PageVersionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PageVersion })
  async createPageVersion(
    @common.Body() data: PageVersionCreateInput
  ): Promise<PageVersion> {
    return await this.service.createPageVersion({
      data: {
        ...data,

        applicationVersion: data.applicationVersion
          ? {
              connect: data.applicationVersion,
            }
          : undefined,

        page: data.page
          ? {
              connect: data.page,
            }
          : undefined,
      },
      select: {
        applicationVersion: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        page: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        versionSchema: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PageVersion] })
  @ApiNestedQuery(PageVersionFindManyArgs)
  async pageVersions(@common.Req() request: Request): Promise<PageVersion[]> {
    const args = plainToClass(PageVersionFindManyArgs, request.query);
    return this.service.pageVersions({
      ...args,
      select: {
        applicationVersion: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        page: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        versionSchema: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PageVersion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pageVersion(
    @common.Param() params: PageVersionWhereUniqueInput
  ): Promise<PageVersion | null> {
    const result = await this.service.pageVersion({
      where: params,
      select: {
        applicationVersion: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        page: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        versionSchema: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PageVersion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePageVersion(
    @common.Param() params: PageVersionWhereUniqueInput,
    @common.Body() data: PageVersionUpdateInput
  ): Promise<PageVersion | null> {
    try {
      return await this.service.updatePageVersion({
        where: params,
        data: {
          ...data,

          applicationVersion: data.applicationVersion
            ? {
                connect: data.applicationVersion,
              }
            : undefined,

          page: data.page
            ? {
                connect: data.page,
              }
            : undefined,
        },
        select: {
          applicationVersion: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          page: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          versionSchema: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PageVersion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePageVersion(
    @common.Param() params: PageVersionWhereUniqueInput
  ): Promise<PageVersion | null> {
    try {
      return await this.service.deletePageVersion({
        where: params,
        select: {
          applicationVersion: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          page: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          versionSchema: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}