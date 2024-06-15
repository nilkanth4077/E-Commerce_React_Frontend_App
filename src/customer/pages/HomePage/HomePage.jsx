import React, { useEffect, useState } from 'react'
import MainCarousel from '../../components/Carousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import Mens_kurta from '../../../Data/Mens_kurta'
import { getAllProducts } from '../../../api/api'

function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(data => setProducts(data));
    }, []);

    return (
        <>
            <MainCarousel />
            <div className='space-y-10 py-20'>
                <HomeSectionCarousel data={products} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Men's Shoes"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Women's Dress"}/>
            </div>
        </>
    )
}

export default HomePage