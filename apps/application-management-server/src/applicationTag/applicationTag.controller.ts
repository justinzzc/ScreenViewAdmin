import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationTagService } from "./applicationTag.service";
import { ApplicationTagControllerBase } from "./base/applicationTag.controller.base";

@swagger.ApiTags("applicationTags")
@common.Controller("applicationTags")
export class ApplicationTagController extends ApplicationTagControllerBase {
  constructor(protected readonly service: ApplicationTagService) {
    super(service);
  }
}
