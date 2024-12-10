import { IMessage } from "../constants/appContants";

export const surveysMock = [
  {
    id: "1",
    title: "Snacks Feedback",
    department: "Admin",
    createdBy: "ashok",
    createdAt: "24/03/2024",
  },
  {
    id: "2",
    title: "Asset Feedback",
    department: "SysAdmin",
    createdBy: "bharani",
    createdAt: "24/03/2024",
  },
];

export const actionItemsMock = [
  {
    id: "1",
    title: "Snacks Feedback",
    department: "Admin",
    priority: "medium",
    createdBy: "ashok",
    createdAt: "24/03/2024",
  },
  {
    id: "2",
    title: "Asset Feedback",
    department: "SysAdmin",
    priority: "medium",
    createdBy: "",
    createdAt: "24/03/2024",
  },
];

export const disputesMock = [
  {
    id: "1",
    abstract: "Dispute with Teammate",
    description: 'Actions of the "X" is demotivating',
    priority: "medium",
    createdBy: "",
    department: "HR",
    assignee: "ashok",
    createdAt: "24/03/2024",
  },
  {
    id: "2",
    abstract: "Dispute with sysadmin ",
    priority: "medium",
    department: "SysAdmin",
    createdBy: "user1@ideas2it.com",
    createdAt: "24/03/2024",
  },
];

export const disputeMessages: IMessage[] = [
  {
    id: "1",
    content: "Hi, I have a concern about something!",
    createdAt: "12/10/2024 , 10:00",
    sender: "me",
  },
  {
    id: "2",
    content: "Thanks for letting us know, can you elloborate your concern?",
    createdAt: "12/10/2024 , 10:05",
  },
  {
    id: "2",
    content: "Ahh fine, I have a dispute with my teammate!",
    createdAt: "12/10/2024 , 10:10",
    sender: "me",
  },
];
