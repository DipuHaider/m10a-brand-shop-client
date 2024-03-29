import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Brands from "./Brands";
import BrandCard from './BrandCard';
import OurPartners from './OurPartners';
import UpcomingEvents from './UpcomingEvents';


const Home = () => {

    const loadedBrands = useLoaderData();
    const [brands, setBrands] = useState(loadedBrands);

    return (
        <div>
            <Helmet><title>Home | Automotive</title></Helmet>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-4">
                <Brands></Brands>
                <div className='grid grid-cols-3 gap-3'>
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
            <OurPartners></OurPartners>
            <UpcomingEvents></UpcomingEvents>
        </div>
        
    );
};

export default Home;