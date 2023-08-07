import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKery }) => {
  const heroId = queryKery[1];
  return axios.get(`http://localhost:3001/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId], () => fetchSuperHero);
};
