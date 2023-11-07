import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const AddProduct = () => {
    const brands = useLoaderData();

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const rating = form.rating.value;

        const newProduct = { image, name, brandname, type, price, desc, rating }


        fetch('https://m10a-brand-shop-server-283gyzcf7-dipuhaiders-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
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
                    <h1 className="text-3xl font-semibold text-center text-theme-primary">Add Product</h1>
                    <form onSubmit={handleAddProduct}  className="space-y-2">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Product Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Image Link" className="w-full input input-bordered input-primary border-theme-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="w-full input input-bordered input-primary border-theme-primary" />
                        </div>
                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
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
                        </div>

                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price"
                                    className="w-full input input-bordered input-primary border-theme-primary" />
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="Rating 0.0 to 5.0"
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
                                <textarea name="desc" rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-theme-primary placeholder:text-gray-400  sm:text-sm sm:leading-6 border-theme-primary" placeholder="Short Description"></textarea>
                            </div>
                        </div>
                        
                        <div>
                            <button className="btn btn-block bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;