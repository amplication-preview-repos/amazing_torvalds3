import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "title";

export const DocumentTitle = (record: TDocument): string => {
  return record.title?.toString() || String(record.id);
};
