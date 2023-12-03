import './ResetStyles.module.scss';
import style from './App.module.scss';
import Header from './components/Header/Header';
import FilterContainer from './components/FilterContainer/FilterContainer';

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
          <div className={style.gallery}>Gallery</div>
        </div>

        <div className={style.main__pagination}>
          <div className={style.pagination}>Pagination</div>
        </div>
      </div>
    </div>
  );
}

export default App;
