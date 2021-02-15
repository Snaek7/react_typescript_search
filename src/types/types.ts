import { Dispatch, SetStateAction } from 'react';

export type ApiResponse = {
  total: number;
  totalHits: number;
  hits: Hits[];
};

export type Hits = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

export type DataContextState = {
  data: ApiResponse;
  setData: Dispatch<SetStateAction<ApiResponse>>;
  handleData: any;
  pageNumber: number;
  setpageNumber: Dispatch<SetStateAction<number>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};
