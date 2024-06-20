import { PlagiarismReportWhereInput } from "./PlagiarismReportWhereInput";
import { PlagiarismReportOrderByInput } from "./PlagiarismReportOrderByInput";

export type PlagiarismReportFindManyArgs = {
  where?: PlagiarismReportWhereInput;
  orderBy?: Array<PlagiarismReportOrderByInput>;
  skip?: number;
  take?: number;
};
