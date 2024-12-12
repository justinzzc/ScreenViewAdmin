import { Module } from "@nestjs/common";
import { PageVersionModuleBase } from "./base/pageVersion.module.base";
import { PageVersionService } from "./pageVersion.service";
import { PageVersionController } from "./pageVersion.controller";
import { PageVersionResolver } from "./pageVersion.resolver";

@Module({
  imports: [PageVersionModuleBase],
  controllers: [PageVersionController],
  providers: [PageVersionService, PageVersionResolver],
  exports: [PageVersionService],
})
export class PageVersionModule {}
