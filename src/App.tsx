import './ResetStyles.module.scss';

import MainContent from './components/MainContent/MainContent';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        {/* Components: Gallery, Pagination and etc */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
