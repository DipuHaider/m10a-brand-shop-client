import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Brands from "./Brands";
import BrandCard from './BrandCard';


const Home = () => {

    const loadedBrands = useLoaderData();
    const [brands, setBrands] = useState(loadedBrands);

    return (
        <div>
            <Helmet><title>Home | Automotive</title></Helmet>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-10 p-2">
                <Brands></Brands>
                {
                    brands?.map(brand => <BrandCard
                        key={brand._id}
                        brand={brand}
                        brands={brands}
                        setBrands={setBrands}
                    ></BrandCard>)
                }
            </div>
        </div>
        
    );
};

export default Home;