import { apiUrls } from "../constants/apiConstants";
import api from "../service/interceptor";

export const saveDispute = async (payload: any) => {
  await api.post(apiUrls.dispute, payload);
};

export const getDisputes = async () => {
  const res = await api.get(apiUrls.dispute);
  return res;
};
