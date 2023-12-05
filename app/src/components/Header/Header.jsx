import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
        <img
          src="https://w7.pngwing.com/pngs/410/852/png-transparent-computer-icons-odnoklassniki-logo-vkontakte-social-network-miscellaneous-text-trademark.png"
          alt="logo: vk"
          className={style.header__logo}
        />
    </header>
  );
}

export  default Header