import { createContext, useContext } from 'react';

export const defaultSiteInfo = {
  title: 'DomainDumper',
  description: 'Domain Management Solution',
  locales: null // Add this to fix serialization issue
};

const SiteContext = createContext({ siteInfo: defaultSiteInfo });

export function SiteProvider({ children, initialSiteInfo = defaultSiteInfo }) {
  return (
    <SiteContext.Provider value={{ siteInfo: initialSiteInfo }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    return { siteInfo: defaultSiteInfo };
  }
  return context;
}

export default SiteContext;