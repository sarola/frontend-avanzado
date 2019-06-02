export interface Language {
  uid: number;
  level: LanguageLevel;
  name: LanguageName;
  date: Date;
}
export interface LanguageName {
  uid: number;
  name: string;
}
export interface LanguageLevel {
  uid: number;
  name: string;
}
