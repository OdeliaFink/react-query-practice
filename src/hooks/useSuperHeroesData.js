import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:3000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError, enabled) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
    enabled, // Pass the enabled option to the useQuery hook
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
