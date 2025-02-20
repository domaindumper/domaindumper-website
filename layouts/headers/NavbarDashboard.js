import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";

import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
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
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
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
            Services
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
            Billing
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
        <li className="nav-item">
          <Link href="/" className="nav-link">
          Open Ticket
          </Link>
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
            {isLoggedIn ? <>Hi, {userData.firstname}!</> : <>Account</>}

            {/* Dropdown Arrow */}
            <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard/" className="dropdown-item">
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/account-details/"
                  className="dropdown-item"
                >
                  Account Details
                </Link>
                <Link
                  href="/dashboard/account-details/"
                  className="dropdown-item"
                >
                  Email History
                </Link>
                <div className="dropdown-divider"></div>
                <Link href="/auth/login/" className="dropdown-item">
                  Change Password
                </Link>
                <button onClick={logout} className="dropdown-item">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login/" className="dropdown-item">
                  Login
                </Link>
                <Link href="/auth/register/" className="dropdown-item">
                  Register
                </Link>
                <Link href="/auth/forgot-password/" className="dropdown-item">
                  Forget password?
                </Link>
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
