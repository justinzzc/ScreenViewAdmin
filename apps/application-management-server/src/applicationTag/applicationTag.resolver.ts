import * as graphql from "@nestjs/graphql";
import { ApplicationTagResolverBase } from "./base/applicationTag.resolver.base";
import { ApplicationTag } from "./base/ApplicationTag";
import { ApplicationTagService } from "./applicationTag.service";

@graphql.Resolver(() => ApplicationTag)
export class ApplicationTagResolver extends ApplicationTagResolverBase {
  constructor(protected readonly service: ApplicationTagService) {
    super(service);
  }
}
