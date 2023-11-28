import logoIcon from '../../icons/Logo.svg';

import style from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logoIcon} alt="Logo Framework Team" className={style.icon} />
    </div>
  );
};

export default Logo;
