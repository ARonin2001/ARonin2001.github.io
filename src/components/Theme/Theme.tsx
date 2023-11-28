import themeBlackIcon from '../../icons/Theme-black-icon.svg';

import style from './Theme.module.scss';

const Theme = () => {
  return (
    <div className={style.theme}>
      <img
        src={themeBlackIcon}
        alt="Theme web-application"
        className={style.themeIcon}
      />
    </div>
  );
};

export default Theme;
