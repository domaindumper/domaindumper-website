import BackToTop from 'components/back-to-top/BackToTop';
import React from 'react';
import FooterDefault from './footers/FooterDefault';
import HeaderDashboard from "./headers/HeaderDashboard";

export default function Layout({children}) {
    
    return (
        <>
            <HeaderDashboard />
           {children}
           <FooterDefault/>
           <BackToTop/>
        </>
    );
}