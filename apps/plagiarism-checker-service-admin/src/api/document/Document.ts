import { PlagiarismReport } from "../plagiarismReport/PlagiarismReport";

export type Document = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  plagiarismReports?: Array<PlagiarismReport>;
  title: string | null;
  updatedAt: Date;
};
