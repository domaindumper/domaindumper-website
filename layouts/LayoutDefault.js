import BackToTop from 'components/back-to-top/BackToTop';
import React from 'react';
import FooterDefault from './footers/FooterDefault';
import HeaderDefault from "./headers/HeaderDefault";
import { useRouter } from 'next/router';

const LayoutDefault = ({ children }) => {
  const router = useRouter();

  return (
    <div lang={router.locale}>
      <HeaderDefault />
      {children}
      <FooterDefault/>
      <BackToTop/>
    </div>
  );
};

export default LayoutDefault;