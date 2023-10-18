import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Brands from "./Brands";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home | Automotive</title></Helmet>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-10 p-2">
                <Brands></Brands>
            </div>
        </div>
        
    );
};

export default Home;