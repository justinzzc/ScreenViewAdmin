import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageVersionService } from "./pageVersion.service";
import { PageVersionControllerBase } from "./base/pageVersion.controller.base";

@swagger.ApiTags("pageVersions")
@common.Controller("pageVersions")
export class PageVersionController extends PageVersionControllerBase {
  constructor(protected readonly service: PageVersionService) {
    super(service);
  }
}
