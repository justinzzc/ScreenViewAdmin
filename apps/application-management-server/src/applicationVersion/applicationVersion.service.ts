import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationVersionServiceBase } from "./base/applicationVersion.service.base";

@Injectable()
export class ApplicationVersionService extends ApplicationVersionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
