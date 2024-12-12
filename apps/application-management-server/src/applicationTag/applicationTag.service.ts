import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationTagServiceBase } from "./base/applicationTag.service.base";

@Injectable()
export class ApplicationTagService extends ApplicationTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
