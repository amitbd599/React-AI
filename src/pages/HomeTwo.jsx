import React, { Fragment, Suspense } from 'react'
import HeaderTwo from '../components/HeaderTwo'
import Preloader from '../elements/Preloader'
import SliderTwo from '../components/SliderTwo'
import AboutSectionTwo from '../components/AboutSectionTwo'
import ServiceSectionTwo from '../components/ServiceSectionTwo'
import CounterSectionTwo from '../components/CounterSectionTwo'
import FAQSectionTwo from '../components/FAQSectionTwo'
import TestimonialSectionTwo from '../components/TestimonialSectionTwo'
import ProjectSectionTwo from '../components/ProjectSectionTwo'
import BlogSectionTwo from '../components/BlogSectionTwo'
import FooterSectionTwo from '../components/FooterSectionTwo'





const HomeTwo = () => {
    return (
        <Fragment>
            <Suspense fallback={<Preloader />}>
                {/* Header one */}
                <HeaderTwo />

                {/* Slider Two */}
                <SliderTwo />

                {/* About Section Two */}
                <AboutSectionTwo />

                {/* Service Section Two */}
                <ServiceSectionTwo />

                {/* Counter Section Two */}
                <CounterSectionTwo />

                {/* FAQ Section Two */}
                <FAQSectionTwo />

                {/* Testimonial Section Two */}
                <TestimonialSectionTwo />

                {/* Project Section Two */}
                <ProjectSectionTwo />

                {/* Blog Section Two */}
                <BlogSectionTwo />

                {/* Footer Section Two */}
                <FooterSectionTwo />

            </Suspense>
        </Fragment>

    )
}

export default HomeTwo