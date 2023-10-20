import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, image, name,  price, desc, rating} = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const rating = form.rating.value;

        const updatedProduct = { image, name,  price, desc, rating }

        console.log(updatedProduct);

        // send data to the server
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto my-5 p-2">
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-theme-primary">Update Product</h1>
                    <form onSubmit={handleUpdateProduct}  className="space-y-2">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Product Image</span>
                            </label>
                            <input type="text" name="image" defaultValue={image} className="w-full input input-bordered input-primary border-theme-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} className="w-full input input-bordered input-primary border-theme-primary" />
                        </div>
                        {/* <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Brand Name</span>
                                </label>
                                <select name="brandname" className="select select-bordered border-theme-primary w-full max-w-xs" >
                                    
                                    {
                                        brands?.map(brand => <option
                                            key={brand._id}
                                            value={brand._id}
                                        >{brand.name}</option>)
                                    } 
                                </select>
                                
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Type</span>
                                </label>
                                <select name="type" className="select select-bordered border-theme-primary w-full max-w-xs">
                                    <option>Crossover</option>
                                    <option>Electric</option>
                                    <option>Hybrid</option>
                                    <option>Sedan</option>
                                    <option>Sports</option>
                                    <option>SUV</option>
                                </select>
                            </div>
                        </div> */}

                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price}
                                    className="w-full input input-bordered input-primary border-theme-primary" />
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    defaultValue={rating}
                                    className="w-full input input-bordered input-primary border-theme-primary"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="text-base label-text">Short Description</span>
                            </label>
                            <div className="mt-2">
                                <textarea name="desc" rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-theme-primary placeholder:text-gray-400  sm:text-sm sm:leading-6 border-theme-primary" defaultValue={desc}></textarea>
                            </div>
                        </div>
                        
                        <div>
                            
                            <input type="submit" value="Update Product" className="btn btn-block bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;