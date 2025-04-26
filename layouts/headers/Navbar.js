import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";
import { useTranslation } from 'next-i18next';

import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    // Check if user is logged in on initial render
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserData = localStorage.getItem("userData");

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    router.push("/auth/login/");
  };

  const router = useRouter();
  return (
    <>
      <ul className="mx-auto navbar-nav">
        <li className="nav-item dropdown position-static">
          <a 
            className={
              router.pathname.startsWith("/domains")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/domains/"
            data-bs-toggle="dropdown"
          >
            {t('nav.domain.title')}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-full">
            <div className="row">
              <div className="col-lg-3 me-lg-auto">
                <h6 className="dropdown-header">{t('nav.domain.overview')}</h6>
                <Link className="dropdown-item py-3 mb-3" href="/domains/">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 shadow-sm size-40 d-flex align-items-center justify-content-center me-3 rounded-circle bg-white">
                      <span className="material-symbols-outlined align-middle fs-4 lh-1 text-secondary">
                        fact_check
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{t('nav.domain.domainData')}</h6>
                      <small className="opacity-75 lh-sm">{t('nav.domain.features')}</small>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-8 ps-lg-8 border-start-lg">
                
                <div className="row">
                  <div className="col-lg-6 mb-6 mb-lg-0">
                  <h6 className="dropdown-header">{t('nav.domain.services')}</h6>
                    <Link className="dropdown-item" href="/domains/">{t('nav.domain.allRegistered')}</Link>
                    <Link className="dropdown-item" href="/domains/">{t('nav.domain.newlyRegistered')}</Link>
                    <Link className="dropdown-item" href="/domains/">{t('nav.domain.expiredDomains')}</Link>
                    <Link className="dropdown-item" href="/domains/">{t('nav.domain.deletedDomains')}</Link>
                    <Link className="dropdown-item" href="/domains/">{t('nav.domain.checkAvailability')}</Link>
                    <Link className="dropdown-item" href="/domains/">{t('nav.domain.aiSuggestions')}</Link>
                  </div>
                  <div className="col-lg-6 mb-6 mb-lg-0">
                  <h6 className="dropdown-header"> {t('nav.tlds.title')}</h6>
                    <Link className="dropdown-item" href="/tlds/tlds-from-a-z/">{t('nav.tlds.fromAtoZ')}</Link>
                    <Link className="dropdown-item" href="/tlds/tlds-categories/">{t('nav.tlds.categories')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a
            className={
              router.pathname.startsWith("/website-data")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/website-data/"
            data-bs-toggle="dropdown"
          >
            {t('nav.websiteData.title')}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link href="/website-data/daily-update/" className="dropdown-item">
              {t('nav.websiteData.dailyUpdate')}
            </Link>
            <Link href="/website-data/all-domains/" className="dropdown-item">
              {t('nav.websiteData.allDomains')}
            </Link>
          </div>
        </li>
        

        <li className="nav-item dropdown">
          <a
            className={
              router.pathname.startsWith("/registrars")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/registrars/"
            data-bs-toggle="dropdown"
          >
            {t('nav.registrars.title')}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link
              href="/registrars/all-domains-registrars/"
              className="dropdown-item"
            >
              {t('nav.registrars.allRegistrars')}
            </Link>
            <Link href="/registrars/tlds-offered/" className="dropdown-item">
              {t('nav.registrars.tldsOffered')}
            </Link>
            <Link
              href="/registrars/cheapest-domain-registration/"
              className="dropdown-item"
            >
              {t('nav.registrars.cheapestRegistration')}
            </Link>
            <Link
              href="/registrars/best-3-year-value/"
              className="dropdown-item"
            >
              {t('nav.registrars.bestValue')}
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className={
              router.pathname.startsWith("/dns")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/dns/"
            data-bs-toggle="dropdown"
          >
            {t('nav.dns.title')}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link href="/dns/records-lookup/" className="dropdown-item">
              DNS Records Lookup
            </Link>
            <Link href="/dns/health-check/" className="dropdown-item">
              DNS Health Check
            </Link>
            <Link href="/dns/reverse-lookup/" className="dropdown-item">
              Reverse DNS Lookup
            </Link>
            <Link href="/dns/propagation-checker/" className="dropdown-item">
              DNS Propagation Checker
            </Link>
            <Link href="/dns/nameserver-history/" className="dropdown-item">
              Nameserver History + Monitoring
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <Link href="/pricing/" className="nav-link">{t('nav.pricing')}</Link>
        </li>

        <li className="nav-item dropdown">
          <a
            className={
              router.pathname.startsWith("/about")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/about/"
            data-bs-toggle="dropdown"
          >
            {t('nav.about.title')}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link href="/about/get-start/" className="dropdown-item">
              {t('nav.about.getStart')}
            </Link>
            <Link href="/about/domain-dumper/" className="dropdown-item">
              {t('nav.about.domainDumper')}
            </Link>
            <Link href="/about/what-we-do/" className="dropdown-item">
              {t('nav.about.whatWeDo')}
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className={
              router.pathname.startsWith("/support")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/support/"
            data-bs-toggle="dropdown"
          >
            {t('nav.support.title')}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link
              href="/support/open-support-ticket/"
              className="dropdown-item"
            >
              {t('nav.support.openTicket')}
            </Link>
            <Link href="/support/api-documents/" className="dropdown-item">
              {t('nav.support.apiDocs')}
            </Link>
            <Link href="/support/knowledgebase/" className="dropdown-item">
              {t('nav.support.knowledgebase')}
            </Link>
            <Link href="/support/payment-methods" className="dropdown-item">
              {t('nav.support.paymentMethods')}
            </Link>
            <Link href="/support/contact-us/" className="dropdown-item">
              {t('nav.support.contactUs')}
            </Link>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav ms-xl-auto">
        <li className="nav-item dropdown mb-3 mb-lg-0">
          <a className={router.pathname.startsWith("/more") ? "nav-link dropdown-arrow active" : "nav-link dropdown-arrow"}
            href="#"
            data-bs-toggle="dropdown"
          >
            {isLoggedIn ? t('nav.account.greeting', { name: userData.firstname }) : t('nav.account.title')}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">expand_more</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard/" className="dropdown-item">{t('nav.account.dashboard')}</Link>
                <Link href="/dashboard/account-details/" className="dropdown-item">{t('nav.account.accountDetails')}</Link>
                <Link href="/dashboard/account-details/" className="dropdown-item">{t('nav.account.emailHistory')}</Link>
                <div className="dropdown-divider"></div>
                <Link href="/auth/login/" className="dropdown-item">{t('nav.account.changePassword')}</Link>
                <button onClick={logout} className="dropdown-item">{t('nav.account.logout')}</button>
              </>
            ) : (
              <>
                <Link href="/auth/login/" className="dropdown-item">{t('nav.account.login')}</Link>
                <Link href="/auth/register/" className="dropdown-item">{t('nav.account.register')}</Link>
                <Link href="/auth/forgot-password" className="dropdown-item">{t('nav.account.forgotPassword')}</Link>
              </>
            )}
          </div>
        </li>

        <ThemeToggler />
      </ul>
    </>
  );
};

export default Navbar;