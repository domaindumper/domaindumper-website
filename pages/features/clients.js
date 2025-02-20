import Head from 'next/head';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CtaBoxed from "components/call-to-actions/CtaBoxed";
import ClientsDefault from "components/clients/ClientsDefault";
import PageHeaderDefault from "components/page-headers/PageHeaderDefault";
import Layout from "layouts/LayoutDefault";
import ErrorBoundary from "components/ErrorBoundary";

// Dynamically import ClientsCarousel with no SSR
const ClientsCarousel = dynamic(
  () => import('components/clients/ClientsCarousel'),
  { ssr: false }
);

export default function Clients() {
    const [isLoading, setIsLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Head>
                <title>Our Clients - DomainDumper</title>
                <meta name="description" content="Discover our trusted partners and clients who rely on DomainDumper for their domain management needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <PageHeaderDefault 
                pageTitle="Our Trusted Clients" 
                pageSubtitle="Join our growing community of satisfied partners"
                breadcrumbActive="Clients" 
            />

            <section className="position-relative">
                <div className="container pb-9 pb-lg-11 position-relative mt-n12">
                    <p className="mb-4">Component: <code>&lt;ClientsDefault/&gt;</code></p>
                    <ErrorBoundary 
                        fallback={
                            <div className="card py-5 px-4 rounded-4 border-0 shadow-lg">
                                <div className="text-center">
                                    <p className="text-muted">Unable to load clients. Please try again later.</p>
                                </div>
                            </div>
                        }
                    >
                        <div className="card py-5 px-4 rounded-4 border-0 shadow-lg">
                            <ClientsDefault />
                        </div>
                    </ErrorBoundary>
                </div>

                <div className="container pb-9 pb-lg-11 position-relative">
                    <p className="mb-4">Component: <code>&lt;ClientsCarousel/&gt;</code></p>
                    <ErrorBoundary 
                        fallback={
                            <div className="card py-5 px-4 rounded-4 border-0 shadow-lg overflow-hidden">
                                <div className="text-center">
                                    <p className="text-muted">Unable to load carousel. Please try again later.</p>
                                </div>
                            </div>
                        }
                    >
                        <div className="card py-5 px-4 rounded-4 border-0 shadow-lg overflow-hidden">
                            {mounted && <ClientsCarousel />}
                        </div>
                    </ErrorBoundary>
                </div>
            </section>

            <section className="position-relative">
                <div className="position-absolute start-0 bottom-0 h-50 w-100 bg-dark"></div>
                <div className="position-absolute start-50 top-0 translate-middle-x h-50 w-75 bg-primary bg-opacity-10 rounded-5"></div>
                <div className="container pt-3 position-relative">
                    <CtaBoxed 
                        link="Request Demo" 
                        action="#" 
                        color="secondary" 
                        heading="A complete solution for you and your client's needs" 
                        subheading="Join 250,000 Customers Today" 
                    />
                </div>
            </section>
        </>
    );
}

Clients.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};