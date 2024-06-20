import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type PlagiarismReportCreateInput = {
  details?: string | null;
  document?: DocumentWhereUniqueInput | null;
  score?: number | null;
};
