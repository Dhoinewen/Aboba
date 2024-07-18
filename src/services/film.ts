import { FilmType } from '@/types/film';
import axios from 'axios';

const AUTH_STRING = `Bearer ${process.env.NEXT_PUBLIC_FILM_API_KEY}`;

export const getPopularFilms = async (): Promise<FilmType[]> => {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: { language: 'en-US' },
    headers: {
      Authorization: AUTH_STRING,
    },
  });

  return response.data.results || [];
};
