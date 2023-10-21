import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const BrandCard = ({ brand, brands, setBrands }) => {

    const { _id, name, logo } = brand;

    return (
        <>
        <NavLink to={`brand/${_id}`}>

        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-theme-primary">
            <figure className="px-10 pt-5">
                <img src={logo} alt={name} className="rounded-xl w-48" />
            </figure>
            <div className="card-body items-center text-center pt-2">
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{name}</h2>
            </div>
        </div>
        </NavLink>
        </>
    );
};

export default BrandCard;