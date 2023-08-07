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
  console.log(
    '🚀 ~ file: ParallelQueries.page.js:14 ~ ParallelQueriesPage ~ friends:',
    friends.data.map((item) => {
      return item.name;
    })
  );

  return (
    <>
      <div>ParallelQueriesPage</div>
    </>
  );
};
