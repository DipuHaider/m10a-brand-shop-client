import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {

    const product = useLoaderData();
    const { _id, image, name, brandname, type, price, desc, rating  } = product;

    return (
        <div className='max-w-6xl mx-auto m-20'>
            
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="px-10 pt-10" src={image} alt={name}/></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-theme-primary pb-5">{name}</h2>
                    <div className='space-y-2 py-2'>
                        <p className="justify-start text-lg text-slate-900">{product.type}</p>
                        <p className="justify-start text-lg text-slate-900">${product.price}</p>
                        <p className="justify-start text-xl text-slate-900">{product.rating} * Rated</p>
                        <p className="justify-start text-base text-slate-900">{product.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;