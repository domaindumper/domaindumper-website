import FormSignIn from "@components/forms/SignIn";
import Layout from "@layouts/LayoutDefault";
import Head from "next/head";
import Link from "next/link";

import { useContext, useEffect } from "react";
import SiteContext from "@lib/siteContext";
import { useAuth } from "@lib/Auth/AuthContext";

export default function AuthSignIn() {
  const { siteInfo } = useContext(SiteContext);
  const { isLoggedIn, userData } = useAuth();
  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
  };
  return (
    <>
      <Head>
        <title>SignIn | {siteInfo.title}</title>
      </Head>
      <div className="container pt-12 pt-lg-15 pb-9 pb-lg-11">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            {isLoggedIn ? (
              <>
                <h2 className="display-6">Hi, {userData.fullname}!</h2>
                <p className="text-muted mb-4">You are already logged in...</p>

                <p className="text-muted small mb-0">
                  <Link
                    href="/dashboard/"
                    className="text-decoration-underline"
                  >
                    Continue to Dashboard
                  </Link>
                  <span className="vr mx-2 align-middle"></span>
                  <Link
                    href="/auth/login/"
                    className="text-decoration-underline"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </p>
              </>
            ) : (
              <>
                <h2 className="display-6">Welcome Back!</h2>
                <p className="text-muted mb-4">
                  Fill the details to continue...
                </p>
                <FormSignIn />
                <p className="text-muted small mb-0">
                  <small>Don't have an account yet? </small>
                  <span className="vr mx-2 align-middle"></span>
                  <Link
                    href="/auth/register"
                    className="text-decoration-underline"
                  >
                    Create One
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
AuthSignIn.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
