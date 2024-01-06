import React, { Fragment, Suspense } from 'react'
import Preloader from '../elements/Preloader'
import HeaderOne from '../components/HeaderOne'
import SliderOne from '../components/SliderOne'
import AboutSectionOne from '../components/AboutSectionOne'
import ServiceSectionOne from '../components/ServiceSectionOne'
import FAQSectionOne from '../components/FAQSectionOne'
import ProjectSectionOne from '../components/ProjectSectionOne'
import TeamSectionOne from '../components/TeamSectionOne'
import CounterSectionOne from '../components/CounterSectionOne'
import PriceSectionOne from '../components/PriceSectionOne'
import TestimonialSectionOne from '../components/TestimonialSectionOne'
import BlogSectionOne from '../components/BlogSectionOne'
import NewsSectionOne from '../components/NewsSectionOne'
import FooterSectionOne from '../components/FooterSectionOne'




const HomeOne = () => {
    return (
        <Fragment>
            <Suspense fallback={<Preloader />}>
                {/* Header one */}
                <HeaderOne />

                {/* slider One */}
                <SliderOne />

                {/* About Section One */}
                <AboutSectionOne />

                {/* Service Section One */}
                <ServiceSectionOne />

                {/* FAQ Section One */}
                <FAQSectionOne />

                {/* Project Section One */}
                <ProjectSectionOne />

                {/* Team Section One */}
                <TeamSectionOne />

                {/* Counter Section One */}
                <CounterSectionOne />

                {/* Price Section One */}
                <PriceSectionOne />

                {/* Testimonial Section One */}
                <TestimonialSectionOne />

                {/* Blog Section One */}
                <BlogSectionOne />

                {/* News Section One */}
                <NewsSectionOne />

                {/* Footer Section One */}
                <FooterSectionOne />

            </Suspense>
        </Fragment>

    )
}

export default HomeOne