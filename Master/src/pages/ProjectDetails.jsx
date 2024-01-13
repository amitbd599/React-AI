import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import ProjectDetailsSection from "../components/ProjectDetailsSection";

const ProjectDetails = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* Header one */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb data={"Project Details"} />

        {/* Project Details Section */}
        <ProjectDetailsSection />

        {/* News Section One */}
        <NewsSectionOne />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default ProjectDetails;
