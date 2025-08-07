import React from 'react';
import Styles from './Pagename.module.scss';

type PagenameProps = {
  title: string;
};

export const Pagename: React.FC<PagenameProps> = ({ title }) => {
  return (
    <>
      <h2 className={Styles.pageName}>{title}</h2>
    </>
  );
};
