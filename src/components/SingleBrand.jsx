import { useLoaderData } from "react-router-dom";

const SingleBrand = () => {

    const brand = useLoaderData();
    const { _id, name, logo, banner1, banner2, banner3 } = brand;
    return (
        <div className="max-w-7xl mx-auto my-10 p-2">
            {brand.name}
        </div>
    );
};

export default SingleBrand;