import Axios from "axios";

export const initAxios = (apiKey: string) => Axios.create({
    baseURL: 'https://api.stripe.com/v1',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${apiKey}`,
    },
  });