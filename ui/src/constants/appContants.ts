export const questionTypes = {
  shortText: 'short Text',
  LongText: 'long Text',
  radio: 'radio',
  checkbox: 'checkbox',
  number: 'number',
  rating: 'rating',
};

export interface IQuestion {
  type: string;
  title: string;
  isRequired: boolean;
}
export interface ISurvey {
  title: string;
  description: string;
  questions: IQuestion[] | [];
  users: string[] | [];
}
