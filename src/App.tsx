import './ResetStyles.module.scss';

import Header from './components/Header/Header';
import FilterContainer from './components/FilterContainer/FilterContainer';
import Gallery from './components/Gallery/Gallery';
import PaginationContainer from './components/PaginationContainer/PaginationContainer';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.main__header}>
          <Header />
        </div>

        <div className={style.main__filter}>
          <FilterContainer />
        </div>

        <div className={style.main__gallery}>
          <Gallery />
        </div>

        <div className={style.main__pagination}>
          <PaginationContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
