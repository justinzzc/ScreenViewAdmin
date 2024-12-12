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
import { PageService } from "../page.service";
import { PageCreateInput } from "./PageCreateInput";
import { Page } from "./Page";
import { PageFindManyArgs } from "./PageFindManyArgs";
import { PageWhereUniqueInput } from "./PageWhereUniqueInput";
import { PageUpdateInput } from "./PageUpdateInput";
import { PageVersionFindManyArgs } from "../../pageVersion/base/PageVersionFindManyArgs";
import { PageVersion } from "../../pageVersion/base/PageVersion";
import { PageVersionWhereUniqueInput } from "../../pageVersion/base/PageVersionWhereUniqueInput";

export class PageControllerBase {
  constructor(protected readonly service: PageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Page })
  async createPage(@common.Body() data: PageCreateInput): Promise<Page> {
    return await this.service.createPage({
      data: {
        ...data,

        application: data.application
          ? {
              connect: data.application,
            }
          : undefined,
      },
      select: {
        application: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        pageSchema: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Page] })
  @ApiNestedQuery(PageFindManyArgs)
  async pages(@common.Req() request: Request): Promise<Page[]> {
    const args = plainToClass(PageFindManyArgs, request.query);
    return this.service.pages({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        pageSchema: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async page(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    const result = await this.service.page({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        pageSchema: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePage(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() data: PageUpdateInput
  ): Promise<Page | null> {
    try {
      return await this.service.updatePage({
        where: params,
        data: {
          ...data,

          application: data.application
            ? {
                connect: data.application,
              }
            : undefined,
        },
        select: {
          application: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,
          pageSchema: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePage(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    try {
      return await this.service.deletePage({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,
          pageSchema: true,
          updatedAt: true,
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

  @common.Get("/:id/pageVersions")
  @ApiNestedQuery(PageVersionFindManyArgs)
  async findPageVersions(
    @common.Req() request: Request,
    @common.Param() params: PageWhereUniqueInput
  ): Promise<PageVersion[]> {
    const query = plainToClass(PageVersionFindManyArgs, request.query);
    const results = await this.service.findPageVersions(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/pageVersions")
  async connectPageVersions(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: PageVersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pageVersions: {
        connect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/pageVersions")
  async updatePageVersions(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: PageVersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pageVersions: {
        set: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/pageVersions")
  async disconnectPageVersions(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: PageVersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pageVersions: {
        disconnect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }
}