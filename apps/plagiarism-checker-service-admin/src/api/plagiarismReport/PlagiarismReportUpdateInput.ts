import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type PlagiarismReportUpdateInput = {
  details?: string | null;
  document?: DocumentWhereUniqueInput | null;
  score?: number | null;
};
