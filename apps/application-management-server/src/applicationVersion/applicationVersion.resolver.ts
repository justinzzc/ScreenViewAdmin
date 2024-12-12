import * as graphql from "@nestjs/graphql";
import { ApplicationVersionResolverBase } from "./base/applicationVersion.resolver.base";
import { ApplicationVersion } from "./base/ApplicationVersion";
import { ApplicationVersionService } from "./applicationVersion.service";

@graphql.Resolver(() => ApplicationVersion)
export class ApplicationVersionResolver extends ApplicationVersionResolverBase {
  constructor(protected readonly service: ApplicationVersionService) {
    super(service);
  }
}
