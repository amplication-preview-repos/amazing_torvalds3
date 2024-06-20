import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlagiarismReportListRelationFilter } from "../plagiarismReport/PlagiarismReportListRelationFilter";

export type DocumentWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  plagiarismReports?: PlagiarismReportListRelationFilter;
  title?: StringNullableFilter;
};
