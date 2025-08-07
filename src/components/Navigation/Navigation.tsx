'use client';

import React from 'react';
import Styles from './Navigation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type navItem = {
  label?: string;
  icon?: React.ReactNode;
  href?: string;
};

type navProps = {
  navigation: navItem[];
};

export const Navigation: React.FC<navProps> = ({ navigation }) => {
  const pathname = usePathname();

  return (
    <div className={Styles.navigationWrapper}>
      <div className={Styles.logo}>
        <Image src='/logo.png' alt='' width={260} height={64} />
      </div>
      <ul className={Styles.navList}>
        {navigation.map((item, index) => (
          <li key={item.href} className={Styles.navItems}>
            <Link
              href={item.href || '#'}
              className={clsx(Styles.navLink, {
                [Styles.selected]: index === 0,
                [Styles.active]: pathname === item.href,
              })}
            >
              <div className={Styles.navIcon}>{item.icon}</div>
              <div className={Styles.navLabel}>{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
