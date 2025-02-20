export const formatPageTitle = (pageTitle, siteTitle = 'DomainDumper') => {
  return pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
};