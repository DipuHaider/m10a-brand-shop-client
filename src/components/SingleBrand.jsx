import { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

const SingleBrand = () => {
    const brand = useLoaderData();
    const { _id, name, logo, banner1, banner2, banner3 } = brand;
    
    // State to store product data
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from the API
        fetch("http://localhost:5000/product")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); // Update the products state with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });
    }, []); // The empty dependency array ensures this effect runs once on component mount

    return (
        <div className="max-w-7xl mx-auto my-10 p-2">
            <h1>{name}</h1>
            <img src={logo} alt={name} />
            <img src={banner1} alt={`${name} Banner 1`} />
            <img src={banner2} alt={`${name} Banner 2`} />
            <img src={banner3} alt={`${name} Banner 3`} />

            <h2>Products</h2>
            <ul>
                {/* {products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))} */}
                {products.map((product) => {
                    if (product.brandname === brand._id) {
                        return (
                            <li key={product._id}><Link to={`/product/${_id}`}>{product.name}</Link></li>
                            
                        );
                    }
                    return null; // Return null for products that don't match the condition
                })}
            </ul>
        </div>
    );
};

export default SingleBrand;






