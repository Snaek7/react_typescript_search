import axios from 'axios';

export const getImage = (term: string): Promise<any> => {
  return axios.get(
    `https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}&q=${term}&image_type=photo&pretty=true&page=12`
  );
};
