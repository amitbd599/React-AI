import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import FAQSectionOne from "../components/FAQSectionOne";
import CounterSectionOne from "../components/CounterSectionOne";

const FAQ = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* Header one */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb data={"FAQ"} />

        {/* FAQ Section One */}
        <FAQSectionOne />

        {/* Counter Section One */}
        <CounterSectionOne />

        {/* News Section One */}
        <NewsSectionOne />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default FAQ;
