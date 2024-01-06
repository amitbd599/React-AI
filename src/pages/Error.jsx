import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const Error = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* Error Section start */}
        <section className="error-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wrapper">
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="./assets/img/common/error.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h4>PAGE NOT FOUND!</h4>
                    <p>
                      Sorry we can't find that page! The page you are looking{" "}
                      <br />
                      for was never existed.
                    </p>
                  </div>
                  <div className="d-adjust">
                    <a className="default-btn" href="index-1.html">
                      Back to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
};

export default Error;
