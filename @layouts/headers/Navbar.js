import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";

import { useContext, useEffect, useState } from 'react';



export default function Navbar() {
 // const { isLoggedIn, user, isLoading } = useAuth();
  const router = useRouter();
  return (
    <>
      <ul className="mx-auto navbar-nav">
        <li className="nav-item dropdown position-static">
          <a
            className={
              router.pathname.startsWith("/features")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/domains/"
            data-bs-toggle="dropdown"
          >
            Domain
            {/* Dropdown Arrow */}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-full">
            <div className="row">
              <div className="col-lg-3 me-lg-auto">
                <h6 className="dropdown-header">Overview</h6>
                <Link className="dropdown-item py-3 mb-3" href="/domains/">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 shadow-sm size-40 d-flex align-items-center justify-content-center me-3 rounded-circle bg-white">
                      <span className="material-symbols-outlined align-middle fs-4 lh-1 text-secondary">
                        fact_check
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Domain Data</h6>
                      <small className="opacity-75 lh-sm">
                        Full list of features
                      </small>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-8 ps-lg-8 border-start-lg">
                <h6 className="dropdown-header">Domain's All Services</h6>
                <div className="row">
                  <div className="col-lg-6 mb-6 mb-lg-0">
                    <Link className="dropdown-item" href="/domains/">
                      All registered domains
                    </Link>
                    <Link className="dropdown-item" href="/domains/">
                      Newly registered domains
                    </Link>
                    <Link className="dropdown-item" href="/domains/">
                      Expired domains list
                    </Link>
                    <Link className="dropdown-item" href="/domains/">
                      Deleted domains list
                    </Link>
                  </div>
                  <div className="col-lg-6 mb-6 mb-lg-0">
                    <Link className="dropdown-item" href="/domains/">
                      Check domain availability
                    </Link>
                    <Link className="dropdown-item" href="/domains/">
                      AI domain name suggestions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className={
              router.pathname.startsWith("/tlds")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="/tlds/"
            data-bs-toggle="dropdown"
          >
            Tlds
            {/* Dropdown Arrow */}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link href="/tlds/tlds-from-a-z/" className="dropdown-item">
              Tlds From A-Z
            </Link>
            <Link href="/tlds/tlds-categories/" className="dropdown-item">
              Tlds Categories
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
            Registrars
            {/* Dropdown Arrow */}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link
              href="/registrars/all-domains-registrars/"
              className="dropdown-item"
            >
              All domains registrars
            </Link>
            <Link href="/registrars/tlds-offered/" className="dropdown-item">
              TLDs Offered
            </Link>
            <Link
              href="/registrars/cheapest-domain-registration/"
              className="dropdown-item"
            >
              Cheapest domain registration
            </Link>
            <Link
              href="/registrars/best-3-year-value/"
              className="dropdown-item"
            >
              Best 3 Year Value
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <Link href="/pricing/" className="nav-link">
            Pricing
          </Link>
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
            About
            {/* Dropdown Arrow */}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link href="/about/get-start/" className="dropdown-item">
              Get Start
            </Link>
            <Link href="/about/domain-dumper/" className="dropdown-item">
              DomainDumper
            </Link>
            <Link href="/about/what-we-do/" className="dropdown-item">
              What we do?
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
            Support
            {/* Dropdown Arrow */}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu">
            <Link
              href="/support/open-support-tickets/"
              className="dropdown-item"
            >
              Open Support Tickets
            </Link>
            <Link href="/support/api-documents/" className="dropdown-item">
              API Documents
            </Link>
            <Link href="/support/knowledgebase/" className="dropdown-item">
              Knowledgebase
            </Link>
            <Link href="/support/payment-methods" className="dropdown-item">
              Payment methods
            </Link>
            <Link href="/support/contact-us/" className="dropdown-item">
              Contact us
            </Link>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav ms-xl-auto">
        <li className="nav-item dropdown mb-3 mb-lg-0">
          <a
            className={
              router.pathname.startsWith("/more")
                ? "nav-link dropdown-arrow active"
                : "nav-link dropdown-arrow"
            }
            href="#"
            data-bs-toggle="dropdown"
          >
            Account
            {/* Dropdown Arrow */}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <Link href="/auth/login/" className="dropdown-item">
              Login
            </Link>
            <Link href="/auth/register/" className="dropdown-item">
              Register
            </Link>
            <Link href="/auth/forgot-password" className="dropdown-item">
              Forget password?
            </Link>
          </div>
        </li>

        <ThemeToggler />
      </ul>
    </>
  );
}
