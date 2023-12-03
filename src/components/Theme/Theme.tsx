import themeBlackIcon from '../../icons/Theme-black-icon.svg';

import style from './Theme.module.scss';

const Theme = () => {
  return (
    <button className={style.btn}>
      <img
        src={themeBlackIcon}
        alt="Theme web-application"
        className={style.themeIcon}
      />
    </button>
  );
};

export default Theme;
