import { PlagiarismReportCreateNestedManyWithoutDocumentsInput } from "./PlagiarismReportCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  author?: string | null;
  content?: string | null;
  plagiarismReports?: PlagiarismReportCreateNestedManyWithoutDocumentsInput;
  title?: string | null;
};
