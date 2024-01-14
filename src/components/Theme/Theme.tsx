import { useState } from 'react';
import themeBlackIcon from '../../icons/Theme-black-icon.svg';
import themeWhiteIcon from '../../icons/Theme-white-icon.svg';

import style from './Theme.module.scss';

const Theme = () => {
  let [icon, setIcon] = useState<string>(themeBlackIcon);
  let [theme, setTheme] = useState<'light' | 'dark'>('light');

  document.body.setAttribute('data-theme', theme);

  const toggleTheme = () => {
    // set attribute data-theme for body
    setTheme(theme === 'light' ? 'dark' : 'light');

    // set icon of theme, white or black
    setIcon(icon === themeWhiteIcon ? themeBlackIcon : themeWhiteIcon);
  };

  return (
    <button className={style.btn} onClick={toggleTheme}>
      <img src={icon} alt="Theme web-application" className={style.themeIcon} />
    </button>
  );
};

export default Theme;
