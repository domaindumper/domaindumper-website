import Layout from "@layouts/LayoutDefault";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if user is logged in on initial render
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserData = localStorage.getItem("userData");

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      setTimeout(() => {
        setUserData(JSON.parse(storedUserData));
      }, 300);
    }
  }, []);

  console.log(isLoggedIn);
  console.log(userData);
  return (
    <>
      <section className="bg-light">
        <div className="container pt-12 pb-9 pt-lg-15 pb-lg-12 text-left">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Account</div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item active">
                      <Link href="/dashboard/account-details/">
                        Account Details
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/dashboard/account-details/">
                        Change Password
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/dashboard/account-details/">
                        Email History
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-9 primary-content">
              <div className="row">
                <form>
                  <div className="card mb-3">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label class="form-label">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label class="form-label">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label class="form-label">Company</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Company"
                            required
                          />
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label class="form-label">Email Address</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label class="form-label">Phone Number</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="card-header">Billing Address</div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label class="form-label">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Address"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label class="form-label">City</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="City"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label class="form-label">State/Region</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="State/Region"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label class="form-label">Zip Code</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Zip Code"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label class="form-label">Country</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Country"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="card-header">Email Preferences</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
