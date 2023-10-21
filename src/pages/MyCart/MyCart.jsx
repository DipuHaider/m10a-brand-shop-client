import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CartCard from "./CartCard";

const MyCart = () => {

    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);

    return (
        <div>
          <div className='grid grid-cols-3 gap-3'>
                    {
                        carts?.map(cart => <CartCard
                            key={cart._id}
                            cart={cart}
                            carts={carts}
                            setCarts={setCarts}
                        ></CartCard>)
                    }
                </div>
        </div>
    );
};

export default MyCart;