export const questionTypes = {
  shortText: 'short Text',
  LongText: 'long Text',
  radio: 'radio',
  checkbox: 'checkbox',
  number: 'number',
  rating: 'rating',
};

export interface IQuestion {
  id: string;
  type: string;
  title: string;
  isRequired: boolean;
  answer: any;
}
export interface ISurvey {
  title: string;
  description: string;
  questions: IQuestion[] | [];
  users: string[] | [];
}
