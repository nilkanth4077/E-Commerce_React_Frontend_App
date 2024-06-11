import React from 'react'
import MainCarousel from '../../components/Carousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
    return (
        <>
            <MainCarousel />
            <div className='space-y-10 py-20'>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
            </div>
        </>
    )
}

export default HomePage