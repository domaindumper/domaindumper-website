import { useEffect } from "react";
import { useRouter } from "next/router";
import FormSignIn from "@components/forms/SignIn";
import Layout from "@layouts/LayoutDefault";
import Head from "next/head";
import Link from "next/link";

import { useSite } from "@/context/SiteContext";
import { useAuth } from "@/context/AuthContext";

export default function AuthSignIn() {
  const router = useRouter();
  const { siteInfo } = useSite();
  const { isLoggedIn, userData, logout } = useAuth();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (isLoggedIn && !router.query.redirect) {
      router.push('/dashboard');
    }
  }, [isLoggedIn, router]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    router.push('/');
  };

  const pageTitle = `Sign In | ${siteInfo?.title || 'DomainDumper'}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Sign in to your DomainDumper account" />
      </Head>
      <div className="container pt-12 pt-lg-15 pb-9 pb-lg-11">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            {isLoggedIn ? (
              <>
                <h2 className="display-6">Hi, {userData?.fullname || 'User'}!</h2>
                <p className="text-muted mb-4">You are already logged in.</p>

                <p className="text-muted small mb-0">
                  <Link
                    href="/dashboard"
                    className="text-decoration-underline"
                  >
                    Continue to Dashboard
                  </Link>
                  <span className="vr mx-2 align-middle"></span>
                  <Link
                    href="#"
                    className="text-decoration-underline text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </p>
              </>
            ) : (
              <>
                <h2 className="display-6">Welcome Back!</h2>
                <p className="text-muted mb-4">
                  Sign in to access your account
                </p>
                <FormSignIn />
                <div className="mt-4">
                  <p className="text-muted small mb-0">
                    <Link
                      href="/auth/forgot-password"
                      className="text-decoration-underline"
                    >
                      Forgot Password?
                    </Link>
                    <span className="vr mx-2 align-middle"></span>
                    <Link
                      href="/auth/register"
                      className="text-decoration-underline"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
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
