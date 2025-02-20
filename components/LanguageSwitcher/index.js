import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';

const languages = [
  { 
    code: 'en', 
    flag: '/img/flags/en.svg',
    shortName: 'EN'
  },
  { 
    code: 'hi', 
    flag: '/img/flags/in.svg',
    shortName: 'HI'
  }
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { pathname, asPath, query } = router;

  const currentLang = languages.find(lang => lang.code === router.locale) || languages[0];

  return (
    <div className="language-switcher">
      <button 
        className="btn btn-link dropdown-toggle"
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        aria-label={t('language.select')}
      >
        <span className="flag-icon">
          <Image
            src={currentLang.flag}
            alt={t(`language.${currentLang.code}`)}
            layout="fixed"
            width={24}
            height={24}
            objectFit="cover"
            quality={100}
          />
        </span>
        <span className="d-none d-sm-inline">
          {t(`language.${currentLang.code}`)}
        </span>
        <span className="d-inline d-sm-none">
          {currentLang.shortName}
        </span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {languages.map((language) => (
          <li key={language.code}>
            <button
              className={`dropdown-item ${router.locale === language.code ? 'active' : ''}`}
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: language.code });
              }}
            >
              <span className="flag-icon">
                <Image
                  src={language.flag}
                  alt={t(`language.${language.code}`)}
                  layout="fixed"
                  width={24}
                  height={24}
                  objectFit="cover"
                  quality={100}
                />
              </span>
              {t(`language.${language.code}`)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;