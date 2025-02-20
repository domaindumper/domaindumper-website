import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import PageHeaderDefault from "components/page-headers/PageHeaderDefault";
import Layout from "layouts/LayoutDefault";

// Dynamically import slider components with no SSR
const ClientsCarousel = dynamic(() => import("components/clients/ClientsCarousel"), {
    ssr: false
});

const TestimonialsSlider = dynamic(() => import("components/testimonials/TestimonialsSlider"), {
    ssr: false
});

export default function SwiperSlider() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Head>
                <title>Swiper Slider - DomainDumper</title>
            </Head>

            <PageHeaderDefault 
                pageTitle="Swiper slider" 
                pageSubtitle="2 Components" 
            />

            <section className="position-relative">
                <div className="position-relative overflow-hidden mt-n12">
                    <div className="container pb-9 pb-lg-11 position-relative">
                        <p>Component: <code>&lt;TestimonialsSlider/&gt;</code></p>
                        {mounted && <TestimonialsSlider />}
                    </div>
                    <div className="container pb-9 pb-lg-11 position-relative">
                        <p className="mb-5">Component: <code>&lt;ClientsCarousel/&gt;</code></p>
                        {mounted && <ClientsCarousel />}
                    </div>
                </div>
            </section>
        </>
    );
}

SwiperSlider.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};