import axios from 'axios';
import { ISurvey } from '../constants/appContants';
import { apiUrls } from '../constants/apiConstants';

const api = axios.create({
  baseURL: 'http//localhost:8090',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const saveSurvey = async (payload: ISurvey) => {
  await api.post(apiUrls.survey, payload);
};

export const getSurvey = async (surveyId: string) => {
  const res: { data: ISurvey } = await api.get(`${apiUrls.survey}/${surveyId}`);
  return res?.data;
};
