import { defaultSiteInfo } from '@/context/SiteContext';

export async function getCommonPageProps() {
  return {
    props: {
      siteInfo: defaultSiteInfo
    }
  };
}