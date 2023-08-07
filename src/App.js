import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import CustomSuperHero from './components/CustomSuperHero';
import RQSuperHeroPage from './components/RQSuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import DynamicParallel from './components/DynamicParallel.page';
import { DependentQueriesPage } from './components/DependentQueries.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="odelia.finkel@gmail.com" />}
            />
            <Route
              path="rq-dynamic-parallel"
              element={<DynamicParallel heroIds={[1, 3]} />}
            />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            {/* <Route
              path="/customrq-super-heroes"
              element={<CustomSuperHero />}
            /> */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right  " />
    </QueryClientProvider>
  );
}

export default App;
