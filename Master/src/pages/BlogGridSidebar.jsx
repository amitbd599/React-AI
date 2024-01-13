import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogGridSidebarSection from "../components/BlogGridSidebarSection";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";

const BlogGridSidebar = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* Header one */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb data={"Blog Grid Sidebar"} />

        {/* Blog Grid */}
        <BlogGridSidebarSection />

        {/* News Section One */}
        <NewsSectionOne />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default BlogGridSidebar;
