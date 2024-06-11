import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {

    const responsive = {
        0: {
            items: 1,
        },
        720: {
            items: 2,
        },
        1024: {
            items: 7,
        },
    };

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

    return (
        <div className="relative px-4 lg:px-8">
            {/* <div className='absolute right-12 mr-5'>
                <p className='mr-5'>View More</p>
            </div> */}
            <div className="relative p-5">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                />
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
