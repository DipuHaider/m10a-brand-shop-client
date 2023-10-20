import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
        <>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full scroll-smooth">
                <img src={banner1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle overflow-hidden">❮</a> 
                    <a href="#slide2" className="btn btn-circle overflow-hidden">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle overflow-hidden">❮</a> 
                    <a href="#slide3" className="btn btn-circle overflow-hidden">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle overflow-hidden">❮</a> 
                    <a href="#slide1" className="btn btn-circle overflow-hidden">❯</a>
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto my-20" data-aos="fade-up"data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        
            <div className="flex flex-col items-center text-center">
                <h2 className="text-4xl text-theme-light font-extralight mb-6">{name}</h2>
                <img src={logo} alt={name} />
            </div>
            
            {/* <img src={banner1} alt={`${name} Banner 1`} />
            <img src={banner2} alt={`${name} Banner 2`} />
            <img src={banner3} alt={`${name} Banner 3`} /> */}
            

            <div className='grid grid-cols-3 gap-4'>
                {/* {products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))} */}
                {products.map((product) => {
                    if (product.brandname === brand._id) {
                        return (
                            <>
                            
                            <div className="card w-96 bg-base-100 shadow-xl hover:shadow-theme-primary" key={product._id}>
                                <figure className="px-10 pt-10">
                                    <img  src={product.image} alt={product.name} className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title justify-center text-2xl text-theme-primary">{product.name}</h2>
                                </div>
                                <div className="card-body items-start text-left">
                                    <p className="justify-start text-xl text-slate-900">{product.type}</p>
                                    <p className="justify-start text-xl text-slate-900">${product.price}</p>
                                    <p className="justify-start text-xl text-slate-900">{product.rating} * Rated</p>
                                    <p className="justify-start text-xl text-slate-900">{product.desc}</p>
                                </div>
                                <div className="card-actions justify-center mb-5">
                                    <div className="btn-group btn-group-horizontal space-x-4">
                                    <Link to={`/product/${product._id}`}><button className="btn">Details</button></Link>
                                    <Link to={`/updateProduct/${product._id}`}><button className="btn">Update</button></Link>
                                        <button
                                            onClick={() => handleDelete(_id)}
                                            className="btn bg-orange-500">X</button>
                                    </div>
                                </div>
                            </div>
                            
                            
                            </>
                        );
                    }
                    return null; // Return null for products that don't match the condition
                })}
            </div>
        </div>
        </>
    );
};

export default SingleBrand;






