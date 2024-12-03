import { ISurvey } from "../constants/appContants";
import { apiUrls } from "../constants/apiConstants";
import api from "../service/interceptor";

export const saveSurvey = async (payload: ISurvey) => {
  await api.post(apiUrls.survey, payload);
};

export const getSurvey = async (surveyId: string) => {
  const res: ISurvey = await api.get(`${apiUrls.survey}/${surveyId}`);
  return res;
};

export const fetchAllSurvey = async () => {
  const res: ISurvey[] = await api.get(apiUrls.surveyList);
  return res;
};
