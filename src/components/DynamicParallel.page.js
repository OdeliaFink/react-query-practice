import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:3001/superheroes/${heroId}`);
};

const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(
    '🚀 ~ file: DynamicParallel.page.js:17 ~ DynamicParallel ~ queryResults:',
    queryResults
  );

  return <div>DynamicParallel</div>;
};

export default DynamicParallel;
