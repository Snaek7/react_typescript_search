import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '../types/types';

export const getImage = (
  term: string,
  page: number
): Promise<AxiosResponse<ApiResponse>> => {
  return axios.get(
    `https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}&q=${term}&image_type=photo&pretty=true&page=${page}`
  );
};
