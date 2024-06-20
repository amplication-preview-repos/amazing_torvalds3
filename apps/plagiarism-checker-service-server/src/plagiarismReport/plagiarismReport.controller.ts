import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlagiarismReportService } from "./plagiarismReport.service";
import { PlagiarismReportControllerBase } from "./base/plagiarismReport.controller.base";

@swagger.ApiTags("plagiarismReports")
@common.Controller("plagiarismReports")
export class PlagiarismReportController extends PlagiarismReportControllerBase {
  constructor(protected readonly service: PlagiarismReportService) {
    super(service);
  }
}
