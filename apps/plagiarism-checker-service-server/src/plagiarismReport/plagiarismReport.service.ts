import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlagiarismReportServiceBase } from "./base/plagiarismReport.service.base";

@Injectable()
export class PlagiarismReportService extends PlagiarismReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
