import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterSectionOne from "../components/FooterSectionOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutSectionOne from "../components/AboutSectionOne";
import CounterSectionOne from "../components/CounterSectionOne";
import TestimonialSectionOne from "../components/TestimonialSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";

const About = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* Header one */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb data={"About us"} />

        {/* About Section One */}
        <AboutSectionOne />

        {/* Counter Section One */}
        <CounterSectionOne />

        {/* Testimonial Section One */}
        <TestimonialSectionOne />

        {/* News Section One */}
        <NewsSectionOne />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default About;
