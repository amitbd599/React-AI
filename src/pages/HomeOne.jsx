import React, { Fragment, Suspense } from 'react'
import Preloader from '../elements/Preloader'
import HeaderOne from '../components/HeaderOne'
import SliderOne from '../components/SliderOne'
import AboutSectionOne from '../components/AboutSectionOne'
import ServiceSectionOne from '../components/ServiceSectionOne'
import FAQSectionOne from '../components/FAQSectionOne'
import ProjectSectionOne from '../components/ProjectSectionOne'
import TeamSectionOne from '../components/TeamSectionOne'




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





            </Suspense>
        </Fragment>

    )
}

export default HomeOne