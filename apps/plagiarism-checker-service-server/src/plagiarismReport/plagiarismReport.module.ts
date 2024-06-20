import { Module } from "@nestjs/common";
import { PlagiarismReportModuleBase } from "./base/plagiarismReport.module.base";
import { PlagiarismReportService } from "./plagiarismReport.service";
import { PlagiarismReportController } from "./plagiarismReport.controller";
import { PlagiarismReportResolver } from "./plagiarismReport.resolver";

@Module({
  imports: [PlagiarismReportModuleBase],
  controllers: [PlagiarismReportController],
  providers: [PlagiarismReportService, PlagiarismReportResolver],
  exports: [PlagiarismReportService],
})
export class PlagiarismReportModule {}
