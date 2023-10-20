import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const BrandCard = ({ brand, brands, setBrands }) => {

    const { _id, name, logo, banner1, banner2, banner3 } = brand;

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


                fetch(`http://localhost:5000/brand/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your brand has been deleted.',
                                'success'
                            )
                            const remaining = brands.filter(cof => cof._id !== _id);
                            setBrands(remaining);
                        }
                    })

            }
        })
    }


    return (
        <>
        <NavLink to={`brand/${_id}`}>
        {/* <div className="card card-side bg-base-100 shadow-xl">
            
            <figure><img src={logo} alt={name} /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{banner1}</p>
                    <p>{banner2}</p>
                    <p>{banner3}</p>
                </div>
                
            </div>
            
        </div> */}
        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-theme-primary">
            <figure className="px-10 pt-10">
                <img  src={logo} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title justify-center text-2xl text-theme-primary">{name}</h2>
            </div>
        </div>
        </NavLink>
        {/* <div className="card-actions justify-center">
            <div className="btn-group btn-group-vertical space-y-4">
                <button className="btn">View</button>
                <Link to={`updateBrand/${_id}`}>
                <button className="btn">Edit</button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn bg-orange-500">X</button>
            </div>
        </div> */}
        </>
    );
};

export default BrandCard;