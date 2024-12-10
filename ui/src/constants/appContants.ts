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
  id?: string;
  title: string;
  description?: string;
  department: string;
  questions?: IQuestion[] | [];
  emails?: string[] | [];
  createdBy: string;
  updatedBy?: string;
}

export interface IDispute {
  id?: string;
  abstract: string;
  department: string;
  priority?: string;
  assignee?: string;
  description?: string;
  email?: string;
  createdAt?: string;
  createdBy?: string;
}

export interface IMessage {
  id?: string;
  createdAt?: string;
  content?: string;
  sender?: string;
}
