import logoIcon from '../../icons/Logo.svg';

import style from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={style.logo}>
      <a href="#">
        <img src={logoIcon} alt="Logo Framework Team" className={style.icon} />
      </a>
    </div>
  );
};

export default Logo;
