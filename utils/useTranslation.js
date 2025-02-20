import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <footer>
        <p>{t('footer.allRightsReserved')}</p>
      </footer>
    </div>
  );
};