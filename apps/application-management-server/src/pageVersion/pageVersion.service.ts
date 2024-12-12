import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageVersionServiceBase } from "./base/pageVersion.service.base";

@Injectable()
export class PageVersionService extends PageVersionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
