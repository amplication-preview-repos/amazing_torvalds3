import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PlagiarismReportWhereInput = {
  details?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  score?: IntNullableFilter;
};
