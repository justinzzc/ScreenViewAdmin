import { Module } from "@nestjs/common";
import { ApplicationTagModuleBase } from "./base/applicationTag.module.base";
import { ApplicationTagService } from "./applicationTag.service";
import { ApplicationTagController } from "./applicationTag.controller";
import { ApplicationTagResolver } from "./applicationTag.resolver";

@Module({
  imports: [ApplicationTagModuleBase],
  controllers: [ApplicationTagController],
  providers: [ApplicationTagService, ApplicationTagResolver],
  exports: [ApplicationTagService],
})
export class ApplicationTagModule {}
