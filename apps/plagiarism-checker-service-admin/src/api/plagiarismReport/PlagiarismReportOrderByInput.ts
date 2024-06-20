import { SortOrder } from "../../util/SortOrder";

export type PlagiarismReportOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
