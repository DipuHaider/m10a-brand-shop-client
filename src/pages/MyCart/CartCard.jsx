import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const CartCard = ({ cart, carts, setCarts }) => {

    const { _id, productName, productOwner } = cart;
    const { user } = useContext(AuthContext);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://m10a-brand-shop-server-l0y9ghnv4-dipuhaiders-projects.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Cart item has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cof => cof._id !== _id);
                            setCarts(remaining);
                        }
                    })

            }
        })
    }

if (user && user.email === productOwner) {
            return (
                <div className='max-w-7xl mx-auto m-20'>
                    <div className="card card-side bg-base-100 shadow-xl">
                    
                    <div className="card-body">
                            <h2 className="card-title text-2xl text-theme-primary pb-5">{productName}</h2>
                            <div className='space-y-2 py-2'>
                        
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-md bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Delete product</button>
                        </div>
                        </div>
                    </div>
                </div>
            );
          } else {
            return <div>Alert: No item in the cart</div>;
          }
};

export default CartCard;