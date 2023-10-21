import { useLoaderData } from 'react-router-dom';
import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const ProductDetail = () => {

    const { user } = useContext(AuthContext);

    const product = useLoaderData();
    const { image, name, type, price, desc, rating } = product;

        const handleAddCart = name  => {
    
            const productName = name;
            const productOwner = user.email;
            console.log(productOwner)

            const addedProduct = { productName, productOwner }
    
            console.log(addedProduct);
    
            // send data to the server
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Added to cart Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

    return (
        <div className='max-w-6xl mx-auto m-20'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="px-10 pt-10" src={image} alt={name}/></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-theme-primary pb-5">{name}</h2>
                    <div className='space-y-2 py-2'>
                        <p className="justify-start text-lg text-slate-900">{type}</p>
                        <p className="justify-start text-lg text-slate-900">${price}</p>
                        <p className="justify-start text-xl text-slate-900">{rating} * Rated</p>
                        <p className="justify-start text-base text-slate-900">{desc}</p>
                        <p><button onClick={() => handleAddCart(name)} className="btn btn-md bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Add To Cart</button></p>
                    </div>
                </div>
                {/* <div className="card-actions justify-center mb-5">
                    <div className="btn-group btn-group-horizontal space-x-4">
                        
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProductDetail;