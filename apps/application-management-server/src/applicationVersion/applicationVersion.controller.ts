import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationVersionService } from "./applicationVersion.service";
import { ApplicationVersionControllerBase } from "./base/applicationVersion.controller.base";

@swagger.ApiTags("applicationVersions")
@common.Controller("applicationVersions")
export class ApplicationVersionController extends ApplicationVersionControllerBase {
  constructor(protected readonly service: ApplicationVersionService) {
    super(service);
  }
}
