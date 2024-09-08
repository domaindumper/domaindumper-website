import BreadcrumbLight from "@components/breadcrumb/BreadcrumbLight";
import CtaDefault from "@components/call-to-actions/CtaDefault";
import IntegrationCard from "@components/integrations/IntegrationCard";
import PageHeaderDefault from "@components/page-headers/PageHeaderDefault";
import Layout from "@layouts/LayoutDefault";
export const appSlack = '/img/integrations/slack.svg'
export const appMailchimp = '/img/integrations/mailchimp.svg'
export const appTrello = '/img/integrations/trello.svg'
export const appZoom = '/img/integrations/zoom.svg'
export const appDropbox = '/img/integrations/dropbox.svg'
export const appGmail = '/img/integrations/gmail.svg'
export default function Integrations() {
    return (
       <>
        <PageHeaderDefault pageTitle="Integration made easy" breadcrumbActive="Integrations" />

<div className="container pb-9 pb-lg-11 position-relative mt-n12">
            <div className="row mb-4">
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up">
                    <IntegrationCard appLink="#" logoWidth="62" logoHeight="62" src={appTrello} appName="Trello" appDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur turpis, vitae dictum dolor tristique in."/>
                </div>
                <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <IntegrationCard appLink="#" logoWidth="62" logoHeight="62" src={appSlack} appName="Slack" appDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur turpis, vitae dictum dolor tristique in."/>
                </div>
                <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="150">
                    <IntegrationCard appLink="#" logoWidth="62" logoHeight="62" src={appZoom} appName="Zoom" appDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur turpis, vitae dictum dolor tristique in."/>
                </div>
                <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <IntegrationCard appLink="#" logoWidth="62" logoHeight="62" src={appMailchimp} appName="Mailchimp" appDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur turpis, vitae dictum dolor tristique in."/>
                </div>
                <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="250">
                    <IntegrationCard appLink="#" logoWidth="62" logoHeight="62" src={appDropbox} appName="Dropbox" appDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur turpis, vitae dictum dolor tristique in."/>
                </div>
                <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <IntegrationCard appLink="#" logoWidth="62" logoHeight="62" src={appGmail} appName="Gmail" appDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur turpis, vitae dictum dolor tristique in."/>
                </div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="350">
                <button type="button" className="btn btn-primary hover-lift">Lead More Apps
                <span className="material-symbols-rounded align-middle fs-5 ms-2">more_horiz</span>
                </button>
            </div>
        </div>

        <section className="position-relative bg-body-tertiary">
        <div className="container py-9 py-lg-11">
        <CtaDefault link="Get started today" heading="Get started today"  subheading="Join over 25000+ customers worldwide"/>
        </div>
      </section>
       </>
    );
}
Integrations.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }