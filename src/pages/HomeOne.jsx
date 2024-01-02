import React, { Fragment, Suspense } from 'react'
import Preloader from '../elements/Preloader'
import HeaderOne from '../components/HeaderOne'
import SliderOne from '../components/SliderOne'




const HomeOne = () => {
    return (
        <Fragment>
            <Suspense fallback={<Preloader />}>
                {/* Header one */}
                <HeaderOne />

                {/* slider One */}
                <SliderOne />





            </Suspense>
        </Fragment>

    )
}

export default HomeOne