import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBrand = () => {

    const brand = useLoaderData();
    const { _id, name, logo, banner1, banner2, banner3} = brand;

    const handleUpdateBrand = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const logo = form.logo.value;
        const banner1 = form.banner1.value;
        const banner2 = form.banner2.value;
        const banner3 = form.banner3.value;

        const updatedBrand = { name, logo, banner1, banner2, banner3 }

        console.log(updatedBrand);

        // send data to the server
        fetch(`http://localhost:5000/brand/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Brand Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto my-10 p-2">
        <h2>update Brand {name}</h2>
        <form onSubmit={handleUpdateBrand} className="mt-8">
            {/* form row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 ml-4">
                    <label className="input-group">
                        <span>Brand Name</span>
                        <input type="text" name="name" defaultValue={name} placeholder="Brand name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="input-group">
                        <span>Brand Logo</span>
                        <input type="text" name="logo" defaultValue={logo} placeholder="logo" className="input input-bordered" />
                    </label>
                </div>
            </div>
            {/* form row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/3 ml-4">
                    <label className="input-group">
                        <span>Banner 01</span>
                        <input type="text" name="banner1" defaultValue={banner1} placeholder="banner1" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/3 ml-4">
                    <label className="input-group">
                        <span>Banner 02</span>
                        <input type="text" name="banner2" defaultValue={banner2} placeholder="banner2" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/3 ml-4">
                    <label className="input-group">
                        <span>Banner 03</span>
                        <input type="text" name="banner3" defaultValue={banner3} placeholder="banner3" className="input input-bordered" />
                    </label>
                </div>
            </div>
            {/* form row Submit */}
            
            <div className="md:flex mb-8">
                <input type="submit" value="Update Brand" className="btn btn-block bg-theme-primary text-white hover:bg-white hover:text-theme-primary hover:border-theme-primary" />
            </div>
        </form>
    </div>
    );
};

export default UpdateBrand;