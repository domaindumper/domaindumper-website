import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FormSignIn from "components/forms/SignIn";
import Layout from "layouts/LayoutDefault";
import Head from "next/head";
import Link from "next/link";

import { useSite } from "../../context/SiteContext";
import { useAuth } from "../../context/AuthContext";

export default function AuthSignIn() {
  const router = useRouter();
  const { t } = useTranslation('auth');
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

  const pageTitle = t('login.meta.title', { siteName: siteInfo?.title || 'DomainDumper' });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={t('login.meta.description')} />
      </Head>
      <div className="container pt-12 pt-lg-15 pb-9 pb-lg-11">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            {isLoggedIn ? (
              <>
                <h2 className="display-6">
                  {t('login.loggedInTitle', { name: userData?.fullname || 'User' })}
                </h2>
                <p className="text-muted mb-4">{t('login.alreadyLoggedIn')}</p>

                <p className="text-muted small mb-0">
                  <Link
                    href="/dashboard"
                    className="text-decoration-underline"
                  >
                    {t('login.continueLink')}
                  </Link>
                  <span className="vr mx-2 align-middle"></span>
                  <Link
                    href="#"
                    className="text-decoration-underline text-danger"
                    onClick={handleLogout}
                  >
                    {t('login.logoutLink')}
                  </Link>
                </p>
              </>
            ) : (
              <>
                <h2 className="display-6">{t('login.title')}</h2>
                <p className="text-muted mb-4">{t('login.subtitle')}</p>
                <FormSignIn />
                <div className="mt-4">
                  <p className="text-muted small mb-0">
                    <Link
                      href="/auth/forgot-password"
                      className="text-decoration-underline"
                    >
                      {t('login.forgotPassword')}
                    </Link>
                    <span className="vr mx-2 align-middle"></span>
                    <Link
                      href="/auth/register"
                      className="text-decoration-underline"
                    >
                      {t('login.createAccount')}
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

// Add getStaticProps for translation loading
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth', 'common'])),
    },
  };
}

AuthSignIn.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
