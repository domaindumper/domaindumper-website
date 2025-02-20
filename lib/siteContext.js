// siteContext.js
import { createContext, useState } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState({
    title: 'DomainDumper', // Replace with your desired title
    description: 'Your go-to for finding and buying the perfect domain name at the best price. We offer free API access for all our domain services.',
    // Add other site-related information as needed
  });

  return (
    <SiteContext.Provider value={{ siteInfo, setSiteInfo }}>
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;