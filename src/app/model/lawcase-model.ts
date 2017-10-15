import {Relevance} from "./relevance-model";

export class Lawcase {
  id: number;
  caseName: string;
  jurisdiction: string;
  url: string;
  decisionDate: string;
  mnc: string;
  parties: string;
  category: string;
  catchwords: string;
  judgment: string;
  decision: string;
  relevance: Relevance[];
}
