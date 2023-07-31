import React from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const CustomSuperHero = () => {
  const onSuccess = (data) => {
    console.log('perform side effect after data fetching', data);
  };
  const onError = (error) => {
    console.log('perform side effect after error encounter', error);
  };

  const { isLoading, data, isError, refetch } = useSuperHeroesData(
    onSuccess,
    onError,
    false
  );

  return (
    <>
      <div>CustomSuperHero</div>
      <button onClick={refetch}>Click</button>
      {refetch && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4>
            {data?.map((item) => (
              <li style={{ listStyle: 'none' }}>{item}</li>
            ))}
          </h4>
        </div>
      )}
    </>
  );
};

export default CustomSuperHero;
