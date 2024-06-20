import { PlagiarismReportUpdateManyWithoutDocumentsInput } from "./PlagiarismReportUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  author?: string | null;
  content?: string | null;
  plagiarismReports?: PlagiarismReportUpdateManyWithoutDocumentsInput;
  title?: string | null;
};
