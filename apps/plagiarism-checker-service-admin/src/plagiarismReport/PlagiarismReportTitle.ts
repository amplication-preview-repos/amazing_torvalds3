import { PlagiarismReport as TPlagiarismReport } from "../api/plagiarismReport/PlagiarismReport";

export const PLAGIARISMREPORT_TITLE_FIELD = "id";

export const PlagiarismReportTitle = (record: TPlagiarismReport): string => {
  return record.id?.toString() || String(record.id);
};
