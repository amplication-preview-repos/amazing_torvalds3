import * as graphql from "@nestjs/graphql";
import { PlagiarismReportResolverBase } from "./base/plagiarismReport.resolver.base";
import { PlagiarismReport } from "./base/PlagiarismReport";
import { PlagiarismReportService } from "./plagiarismReport.service";

@graphql.Resolver(() => PlagiarismReport)
export class PlagiarismReportResolver extends PlagiarismReportResolverBase {
  constructor(protected readonly service: PlagiarismReportService) {
    super(service);
  }
}
