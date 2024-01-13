import { useState } from 'react';
import themeBlackIcon from '../../icons/Theme-black-icon.svg';
import themeWhiteIcon from '../../icons/Theme-white-icon.svg';

import style from './Theme.module.scss';

const Theme = () => {
  let [icon, setIcon] = useState(themeBlackIcon);
  let [theme, setTheme] = useState<'light' | 'dark'>('light');

  document.body.setAttribute('data-theme', theme);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setIcon(themeWhiteIcon);
    } else {
      setTheme('light');
      setIcon(themeBlackIcon);
    }
  };

  return (
    <button className={style.btn} onClick={toggleTheme}>
      <img src={icon} alt="Theme web-application" className={style.themeIcon} />
    </button>
  );
};

export default Theme;
