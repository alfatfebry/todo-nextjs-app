import React from 'react';
import Styles from './Header.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

type HeaderProps = {
  name: string;
  img?: string | null;
  alt?: string;
};

export const Header: React.FC<HeaderProps> = ({
  name = 'Welcome User',
  img,
  alt = 'User image',
}) => {
  const imgProfileDefaul =
    img && img.trim() !== '' ? img : '/default-profile.png';
  return (
    <header className={clsx(Styles.headerDashboard)}>
      <div className={Styles.headerWrapper}>
        <div className={Styles.nameUser}>{name}</div>
        <div className={clsx(Styles.imageProfileWrap, 'rounded-full')}>
          <Image
            src={imgProfileDefaul}
            alt={alt}
            unoptimized
            width={40}
            height={40}
            className={clsx(Styles.imageProfile)}
          />
        </div>
      </div>
    </header>
  );
};
