import BackToTop from '@components/back-to-top/BackToTop';
import React from 'react';
import FooterDefault from './footers/FooterDefault';
import HeaderDefault from "./headers/HeaderDefault";

export default function Layout({children}) {
    
    return (
        <>
            <HeaderDefault />
           {children}
           <FooterDefault/>
           <BackToTop/>
        </>
    );
}