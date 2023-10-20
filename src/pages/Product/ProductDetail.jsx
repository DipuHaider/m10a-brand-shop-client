import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {

    const product = useLoaderData();
    const { _id, image, name, brandname, type, price, desc, rating  } = product;

    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className="card w-96 bg-base-100 shadow-xl hover:shadow-theme-primary">
                <figure className="px-10 pt-10">
                    <img src={image} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title justify-center text-2xl text-theme-primary">{name}</h2>
                </div>
                <div className="card-body items-start text-left">
                    <p className="justify-start text-xl text-slate-900">{type}</p>
                    <p className="justify-start text-xl text-slate-900">${price}</p>
                    <p className="justify-start text-xl text-slate-900">{rating} * Rated</p>
                    <p className="justify-start text-xl text-slate-900">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;