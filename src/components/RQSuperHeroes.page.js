import { useQuery } from 'react-query';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('perform side effect after data fetching', data);
  };
  const onError = (error) => {
    console.log('perform side effect after error encounter', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  console.log(isFetching, 'FETCH', isLoading, 'LOAD');
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {/* <button onClick={refetch}>fetch heroes</button> */}
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};
