import { Module } from "@nestjs/common";
import { ApplicationVersionModuleBase } from "./base/applicationVersion.module.base";
import { ApplicationVersionService } from "./applicationVersion.service";
import { ApplicationVersionController } from "./applicationVersion.controller";
import { ApplicationVersionResolver } from "./applicationVersion.resolver";

@Module({
  imports: [ApplicationVersionModuleBase],
  controllers: [ApplicationVersionController],
  providers: [ApplicationVersionService, ApplicationVersionResolver],
  exports: [ApplicationVersionService],
})
export class ApplicationVersionModule {}
