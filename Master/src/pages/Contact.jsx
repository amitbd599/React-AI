import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* Header one */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb data={"Contact"} />

        {/* Contact Section */}
        <ContactSection />

        {/* News Section One */}
        <NewsSectionOne />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default Contact;
