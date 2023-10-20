const ProductDetail = () => {

    const product = useLoaderData();
    const { _id, image, name, brandname, type, price, desc, rating  } = product;

    return (
        <div>
            <h2>Product Detail</h2>
            {image}
            <br />
            {name}
        </div>
    );
};

export default ProductDetail;