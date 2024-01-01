import React, { Fragment, Suspense } from 'react'
import Preloader from '../elements/Preloader'
import DemoIntro from '../components/DemoIntro'
import HeaderOne from '../components/HeaderOne'



const Demo = () => {
    return (
        <Fragment>
            <Suspense fallback={<Preloader />}>
                {/* Header one */}
                <HeaderOne />

                {/* DemoIntro */}
                <DemoIntro />
            </Suspense>
        </Fragment>

    )
}

export default Demo