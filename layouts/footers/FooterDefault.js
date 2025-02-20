import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useTranslation } from 'next-i18next';

export const footerLogo = "/img/logo-white.svg";

const navigation = {
  products: [
    { key: 'pricing', href: '/pricing/' },
    { key: 'domains', href: '/domains/' },
    { key: 'tld', href: '/tlds/' },
    { key: 'registrar', href: '/registrars/' },
  ],
  company: [
    { key: 'about', href: '/about/' },
    { key: 'api', href: '/api-docs/' },
    { key: 'kb', href: '/kb/' },
    { key: 'contact', href: '/contact/' },
  ],
  social: [
    {
      key: 'facebook',
      href: 'https://facebook.com/domaindumper',
      icon: 'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'
    },
    {
      key: 'instagram',
      href: 'https://instagram.com/domaindumper',
      icon: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
    },
    {
      key: 'x',
      href: 'https://x.com/domaindumper',
      icon: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'
    },
    {
      key: 'github',
      href: 'https://github.com/domaindumper',
      icon: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
    }
  ]
};

const FooterDefault = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      // Add your newsletter subscription API call here
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscriptionStatus('success');
        setEmail('');
      } else {
        setSubscriptionStatus('failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubscriptionStatus('failed');
    }

    // Clear status after 3 seconds
    setTimeout(() => {
      setSubscriptionStatus('');
    }, 3000);
  };

  return (
    <footer className="footer bg-dark text-white position-relative overflow-hidden" data-bs-theme="dark">
      <div className="container pt-9 pt-lg-11 pb-4 position-relative z-index-1">
        <div className="row gx-lg-5">
          <div className="col-lg-3 mb-5 mb-lg-0">
            <Link className="footer-logo mb-4 d-inline-block" href="/" aria-label="DomainDumper Home">
              <Image src={footerLogo} width={180} height={45} alt="DomainDumper Logo" priority />
            </Link>
            <p className="text-muted mb-0">{t('footer.companyDescription')}</p>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6 mb-5 mb-lg-0">
                <h6 className="text-white mb-4 fw-semibold">{t('footer.products.title')}</h6>
                <ul className="nav flex-column">
                  {navigation.products.map((item) => (
                    <li key={item.key}>
                      <Link 
                        href={item.href} 
                        className="nav-link px-0 py-1 text-muted hover-text-primary"
                      >
                        {t(`footer.products.${item.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-sm-6 mb-5 mb-lg-0">
                <h6 className="text-white mb-4 fw-semibold">{t('footer.company.title')}</h6>
                <ul className="nav flex-column">
                  {navigation.company.map((item) => (
                    <li key={item.key}>
                      <Link 
                        href={item.href} 
                        className="nav-link px-0 py-1 text-muted hover-text-primary"
                      >
                        {t(`footer.company.${item.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="newsletter-form mb-4">
              <h6 className="text-white mb-4 fw-semibold">{t('footer.subscribe.title')}</h6>
              <form onSubmit={handleSubscribe}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control bg-transparent"
                    placeholder={t('footer.subscribe.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    {t('footer.subscribe.button')}
                  </button>
                </div>
                {subscriptionStatus && (
                  <div className={`subscription-status ${
                    subscriptionStatus.includes('failed') ? 'error' : 'success'
                  }`}>
                    {t(`footer.subscribe.${subscriptionStatus.includes('failed') ? 'error' : 'success'}`)}
                  </div>
                )}
              </form>

              <div className="social-links d-flex gap-3">
                {navigation.social.map((item) => (
                  <a 
                    key={item.key}
                    href={item.href}
                    className="text-muted hover-text-primary"
                    aria-label={t(`footer.social.${item.key}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                      <path fill="currentColor" d={item.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3 border-top border-white border-opacity-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <p className="mb-0 text-muted">
                © {currentYear} DomainDumper. {t('footer.allRightsReserved')}
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDefault;
