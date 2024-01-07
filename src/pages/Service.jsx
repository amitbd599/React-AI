import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import ServiceSectionAll from "../components/ServiceSectionAll";

const Service = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* Header one */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb data={"Services"} />

        {/* Service Section All */}
        <ServiceSectionAll />

        {/* News Section One */}
        <NewsSectionOne />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default Service;
