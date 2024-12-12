import * as graphql from "@nestjs/graphql";
import { PageVersionResolverBase } from "./base/pageVersion.resolver.base";
import { PageVersion } from "./base/PageVersion";
import { PageVersionService } from "./pageVersion.service";

@graphql.Resolver(() => PageVersion)
export class PageVersionResolver extends PageVersionResolverBase {
  constructor(protected readonly service: PageVersionService) {
    super(service);
  }
}
