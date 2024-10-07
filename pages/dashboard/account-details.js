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
                <div className="card-header">Your Info</div>

                {userData ? (
                  <>
                    <div className="card-body">
                      <h5 className="card-title"> {userData?.fullname}</h5>
                      <p className="card-text">
                        {userData?.address1}
                        <br />
                        {userData?.city} {userData?.state} {userData?.state}
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
            <div className="col-lg-8 col-xl-9 primary-content">
              <div className="row">
                <form>
                  <div className="card mb-3">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        It appears you do not have any products/services with us
                        yet. Place an order to get started.
                      </p>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        It appears you do not have any products/services with us
                        yet. Place an order to get started.
                      </p>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        It appears you do not have any products/services with us
                        yet. Place an order to get started.
                      </p>
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
