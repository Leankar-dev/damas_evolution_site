export type PolicyBlock = { type: 'paragraph'; text: string } | { type: 'list'; items: string[] };

export interface PolicySection {
  title: string;
  blocks: PolicyBlock[];
}

export interface PrivacyPolicy {
  title: string;
  updatedLabel: string;
  updatedDate: string;
  intro: string[];
  sections: PolicySection[];
}
