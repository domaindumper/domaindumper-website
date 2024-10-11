import Layout from "@layouts/LayoutDashboard";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import SiteContext from "@lib/siteContext";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Dashboard = () => {
  const { siteInfo } = useContext(SiteContext);
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
      <Head>
        <title>Dashboard | {siteInfo.title}</title>
      </Head>
      <section className="bg-light" id="dashboard-area">
        <div className="container pt-12 pb-9 pt-lg-15 pb-lg-12 text-left">
          <div className="row">
            <div className="col-md-3">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Your Info</div>

                {userData ? (
                  <>
                    <div className="card-body">
                      <h5 className="card-title"> {userData?.fullname}</h5>
                      <p className="card-text">
                        {userData?.address1}
                        <br />
                        {userData?.city} {userData?.state} {userData?.postcode}
                        <br />
                        {userData?.countryname}
                        <br />
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="d-grid gap-2">
                        <Link
                          href="/dashboard/account-details/"
                          className="btn btn-primary"
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        <Skeleton />
                      </h5>
                      <p className="card-text">
                        <Skeleton count={3} />
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="d-grid gap-2">
                        <Skeleton count={1} height={45} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">Services</div>
                    <div className="card-body">
                      <h5 className="card-title">All Services</h5>
                      <p className="card-text">
                        1 Active | 2 Suspedned | 10 Others
                      </p>
                      <a href="#" className="btn btn-primary">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">Invoices</div>
                    <div className="card-body">
                      <h5 className="card-title">All Services</h5>
                      <p className="card-text">
                        1 Active | 2 Suspedned | 10 Others
                      </p>
                      <a href="#" className="btn btn-primary">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">Tickets</div>
                    <div className="card-body">
                      <h5 className="card-title">All Services</h5>
                      <p className="card-text">
                        1 Active | 2 Suspedned | 10 Others
                      </p>
                      <a href="#" className="btn btn-primary">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      Your Active Products/Services
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        It appears you do not have any products/services with us
                        yet. Place an order to get started.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header"> Recent Support Tickets </div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        It appears you do not have any products/services with us
                        yet. Place an order to get started.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">Recent News</div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        It appears you do not have any products/services with us
                        yet. Place an order to get started.
                      </p>
                    </div>
                  </div>
                </div>
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
