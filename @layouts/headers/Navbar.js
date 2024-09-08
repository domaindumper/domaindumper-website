
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";
export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <ul className="me-auto navbar-nav ms-xl-4">
              <li className="nav-item dropdown">
                <a className={router.pathname.startsWith("/landings") ? "nav-link dropdown-arrow active" : "nav-link dropdown-arrow"} href="#" data-bs-toggle="dropdown">Landings
                  {/* Dropdown Arrow */}
                  <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
                    expand_more
                  </span>
                </a>
                <div className="dropdown-menu">
                  <Link href="/landings" className="dropdown-item">Default</Link>
                  <Link href="/landings/index-signup" className="dropdown-item">SignUp</Link>
                  <Link href="/landings/index-decorative" className="dropdown-item">Decorative</Link>

                </div>
              </li>
              <li className="nav-item dropdown position-static">
                <a className={router.pathname.startsWith("/features") ? "nav-link dropdown-arrow active" : "nav-link dropdown-arrow"} href="#" data-bs-toggle="dropdown">Features
                  {/* Dropdown Arrow */}
                  <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
                    expand_more
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-full">

                  <div className="row">
                    <div className="col-lg-3 me-lg-auto">
                      <h6 className="dropdown-header">Overview</h6>
                      <Link className="dropdown-item py-3 mb-3" href="/features">
                         <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 shadow-sm size-40 d-flex align-items-center justify-content-center me-3 rounded-circle bg-white">
                                  <span className="material-symbols-outlined align-middle fs-4 lh-1 text-secondary">
                                    fact_check
                                  </span>
                                </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-1">Overview</h6>
                              <small className="opacity-75 lh-sm">Full list of features</small>
                            </div>
                          </div>
                      </Link>
                    </div>
                    <div className="col-lg-8 ps-lg-8 border-start-lg">
                      <h6 className="dropdown-header">Components</h6>
                      <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                        <Link className="dropdown-item" href="/features/animations">
                            Animations
                          </Link>
                          <Link className="dropdown-item" href="/features/buttons">
                           
                            Buttons
                          </Link>
                          <Link className="dropdown-item" href="/features/call-to-actions">
                            Call to actions
                          </Link>
                          <Link className="dropdown-item" href="/features/collapse">
                          Collapse
                          </Link>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                        <Link className="dropdown-item" href="/features/clients">
                        Clients
                          </Link>
                          <Link className="dropdown-item" href="/features/forms">
                          Forms
                          </Link>
                        <Link className="dropdown-item" href="/features/feature-images">
                        Feature Images
                          </Link>
                        <Link className="dropdown-item" href="/features/feature-icons">
                        Icon Cards
                          </Link>
                          
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                        <Link className="dropdown-item" href="/features/pricing-tables">
                        Pricing tables
                          </Link>
                          <Link className="dropdown-item" href="/features/swiper-slider">
                          Swiper Slider
                          </Link>
                          <Link className="dropdown-item" href="/features/testimonials">
                          Testimonials
                          </Link>
                          <Link className="dropdown-item" href="/features/tabbed-content">
                          Tabbed-content
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/pricing" className="nav-link">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link href="/integrations" className="nav-link">integrations</Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link">Blog</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-xl-auto">
              <li className="nav-item dropdown mb-3 mb-lg-0">
                <a className={router.pathname.startsWith("/more") ? "nav-link dropdown-arrow active" : "nav-link dropdown-arrow"} href="#" data-bs-toggle="dropdown">Pages
                  {/* Dropdown Arrow */}
                  <span className="material-symbols-sharp align-middle lh-1 dropdown-arrow-icon">
                    expand_more
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                <Link href="/more/customers" className="dropdown-item">Customers</Link>
                <Link href="/more/typography" className="dropdown-item">Typography</Link>
                <Link href="/404" className="dropdown-item">Custom 404</Link>
                <Link href="/demo-request" className="dropdown-item">Demo request</Link>
                <Link href="/auth/signin" className="dropdown-item">Sign In</Link>
                <Link href="/auth/signup" className="dropdown-item">Sign Up</Link>
                <Link href="/auth/forgot-password" className="dropdown-item">Forget password</Link>
                 </div>
              </li>
              <li className="nav-item mb-3 mb-lg-0">
                <Link className="btn btn-warning btn-sm hover-lift" href="/demo-request">
                Request Demo
                <span className="align-middle material-symbols-rounded fs-5 ms-1 d-none d-xl-inline-block">arrow_forward</span>
               </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/auth/signin">
                Sign In
                  </Link>
              </li>
              <ThemeToggler/>
            </ul>
        </>
    );
}