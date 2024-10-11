import Layout from "@layouts/LayoutDashboard";
import Link from "next/link";
import Head from "next/head";
import SiteContext from "@lib/siteContext";
import "material-symbols";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProtectedRoute from '@components/protectedRoute';

import React, { useEffect, useRef, useState, useContext } from "react";

import axios from "axios";
import { API_END } from "@lib/api";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Dashboard = () => {
  const { siteInfo } = useContext(SiteContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const [error, setError] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [success, setSuccess] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [authToken, setAuthTokenData] = useState("");
  const [firstname, setFirstnameData] = useState("");
  const [lastname, setLastnameData] = useState("");
  const [companyname, setCompanynameData] = useState("");
  const [email, setEmailData] = useState("");
  const [address1, setAddress1Data] = useState("");
  const [city, setCityData] = useState("");
  const [state, setStateData] = useState("");
  const [postcode, setPostcodeData] = useState("");
  const [country, setCountryData] = useState("");
  const [phonenumber, setPhonenumberData] = useState("");

  useEffect(() => {
    // Check if user is logged in on initial render
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserData = localStorage.getItem("userData");
    const storedTokenData = localStorage.getItem("authToken");

    if (storedIsLoggedIn) {
      // Set user data to constant for using in update form

      setAuthTokenData(storedTokenData);
      setFirstnameData(JSON.parse(storedUserData).firstname);
      setLastnameData(JSON.parse(storedUserData).lastname);
      setCompanynameData(JSON.parse(storedUserData).companyname);
      setEmailData(JSON.parse(storedUserData).email);
      setAddress1Data(JSON.parse(storedUserData).address1);
      setCityData(JSON.parse(storedUserData).city);
      setStateData(JSON.parse(storedUserData).state);
      setPostcodeData(JSON.parse(storedUserData).postcode);
      setCountryData(JSON.parse(storedUserData).country);
      setPhonenumberData(JSON.parse(storedUserData).phonenumber);

      setIsLoggedIn(true);
      setTimeout(() => {
        setUserData(JSON.parse(storedUserData));
      }, 300);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_END + "/user/update/", {
        authToken,
        firstname,
        lastname,
        companyname,
        email,
        address1,
        city,
        state,
        postcode,
        country,
        phonenumber,
      });

      //console.log(response.data.Userdata);

      if (response.data.status === "success") {
        const { Userdata } = response.data.Userdata;

        // Update user data or a flag in local storage
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.Userdata)
        );

        setUserData(JSON.parse(storedUserData));

        console.log("Acccount updated successfully");
        setSuccess("Acccount updated successfully");

        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);

        // Redirect to a protected route or home page
        // window.location.href = "/dashboard/";
      } else {
        setError(response.data.message);
        setShowErrorMessage(true);
        setTimeout(() => {
          setShowErrorMessage(false);
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  //console.log(isLoggedIn);
  //console.log(userData);
  return (
    <>
    <ProtectedRoute>
      <Head>
        <title>Acccount details | {siteInfo.title}</title>
      </Head>
      <section className="bg-light" id="dashboard-area">
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
                <form onSubmit={handleSubmit}>
                  <div className="card mb-3">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label className="form-label">First name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            value={firstname}
                            onChange={(e) => setFirstnameData(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            value={lastname}
                            onChange={(e) => setLastnameData(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label className="form-label">Company</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            value={companyname}
                            onChange={(e) => setCompanynameData(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmailData(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            value={phonenumber}
                            onChange={(e) => setPhonenumberData(e.target.value)}
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
                          <label className="form-label">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            value={address1}
                            onChange={(e) => setAddress1Data(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCityData(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label className="form-label">State/Region</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="State/Region"
                            value={state}
                            onChange={(e) => setStateData(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Zip Code</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Zip Code"
                            value={postcode}
                            onChange={(e) => setPostcodeData(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label className="form-label">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountryData(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="card-header">Email Preferences</div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">
                              Save Changes
                            </button>
                          </div>

                          {showErrorMessage && (
                            <p className="text-danger pt-2">{error}</p>
                          )}
                          {showSuccessMessage && (
                            <p className="text-success pt-2">{success}</p>
                          )}
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ProtectedRoute>
    </>
  );
};
Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
