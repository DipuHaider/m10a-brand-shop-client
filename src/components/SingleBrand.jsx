import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleBrand = () => {
    const brand = useLoaderData();
    const { name, logo, banner1, banner2, banner3 } = brand;
    
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch("https://m10a-brand-shop-server-l0y9ghnv4-dipuhaiders-projects.vercel.app/product")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });
    }, []);

    const filteredProducts = products.filter((product) => product.brandname === brand._id);


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
        <div className="max-w-7xl mx-auto my-20" data-aos="fade-up"data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div className="flex">
                <img className="w-32" src={logo} alt={name} />
                <span className="py-2 text-theme-primary text-5xl font-bold italic my-auto mx-4">{name}</span>
            </div>
            <div className='grid grid-cols-3 gap-4'>

            {filteredProducts.length === 0 ? (
                <div className="alert alert-error mt-4">
                    No products found.
                </div>
                ) : (
                filteredProducts.map((product) => (
                    <div className="card bg-base-100 shadow-xl hover:shadow-theme-primary" key={product._id}>
                        <figure className="px-4 pt-4">
                            <img  src={product.image} alt={product.name} className="rounded-xl w-72" />
                        </figure>
                        <div className=" items-center text-left">
                            <h2 className="card-title justify-left text-2xl text-theme-primary px-8 py-2">{product.name}</h2>
                            <h2 className="card-title justify-left text-xl text-slate-700 px-8 py-2">Brand: {name}</h2>
                        </div>
                        <div className="card-body items-start text-left px-8 py-2">
                            <p className="justify-start text-lg text-slate-900">{product.type}</p>
                            <p className="justify-start text-lg text-slate-900">${product.price}</p>
                            <p className="justify-start text-xl text-slate-900">{product.rating} * Rated</p>
                            <p className="justify-start text-base text-slate-900">{product.desc}</p>
                        </div>
                        <div className="card-actions justify-center mb-5">
                            <div className="btn-group btn-group-vertical md:btn-group-horizontal space-x-4">
                            <Link to={`/product/${product._id}`}><button className="btn">Details</button></Link>
                            <Link to={`/updateProduct/${product._id}`}><button className="btn">Update</button></Link>
                            </div>
                        </div>
                    </div>
                ))
            )}
            </div>
        </div>
        </>
    );
};

export default SingleBrand;






