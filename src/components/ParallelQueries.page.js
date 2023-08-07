import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:3001/superheroes');
};
const fetchFriends = () => {
  return axios.get('http://localhost:3001/friends');
};

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes);
  const { data: friends } = useQuery('friends', fetchFriends);

  return (
    <>
      <div>ParallelQueriesPage</div>
    </>
  );
};
