import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { getAllProductsWithoutFilter } from '../../../Api/Api';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProductsWithoutFilter()
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Navigation />
            <Hero />
            <div>
                {loading ? (
                    <div className="flex flex-col items-center justify-center min-h-[300px]">
                        {/* Spinner */}
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                        <p className="mt-3 text-gray-600">Loading products...</p>
                    </div>
                ) : (
                    <HomeSectionCarousel data={products} sectionName={"New Products"} />
                )}
            </div>
            <Footer />
        </>
    );
}

export default HomePage;