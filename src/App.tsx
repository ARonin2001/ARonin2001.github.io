import './ResetStyles.module.scss';

import Header from './components/Header/Header';
import FilterContainer from './components/FilterContainer/FilterContainer';
import MainContent from './components/MainContent/MainContent';

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

        {/* Components: Gallery, Pagination and etc */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
