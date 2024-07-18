'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getFilms = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: { language: 'en-US' },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FILM_API_KEY}`,
    },
  });

  return data;
};

export default function Films() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getFilms,
  });

  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Films
        </p>
      </div>
    </main>
  );
}
