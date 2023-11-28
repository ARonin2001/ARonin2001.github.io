import Logo from '../Logo/Logo';
import Theme from '../Theme/Theme';

import style from './Header.module.scss';

const Header = () => {
  return (
    <header id={style.header}>
      <div className={style.container}>
        <Logo />
        <Theme />
      </div>
    </header>
  );
};

export default Header;
