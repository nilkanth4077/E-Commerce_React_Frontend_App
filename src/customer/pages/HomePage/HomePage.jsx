import React from 'react'
import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { getAllProductsWithoutFilter } from '../../../Api/Api'

function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProductsWithoutFilter().then(data => setProducts(data));
    }, []);

    return (
        <>
            <Navigation />
            <Hero />
            <div>
                <HomeSectionCarousel data={products} sectionName={"New Products"} />
            </div>
            <Footer />
        </>
    )
}

export default HomePage