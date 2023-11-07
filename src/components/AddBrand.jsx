import Swal from 'sweetalert2';

const AddBrand = () => {

    const handleAddBrand = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const logo = form.logo.value;
        const banner1 = form.banner1.value;
        const banner2 = form.banner2.value;
        const banner3 = form.banner3.value;

        const newBrand = { name, logo, banner1, banner2, banner3}

        console.log(newBrand);

        // send data to the server
        fetch('https://m10a-brand-shop-server-283gyzcf7-dipuhaiders-projects.vercel.app/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Brand Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto my-10 p-2">
        <h2>Add Brand</h2>
        <form onSubmit={handleAddBrand} className="mt-8">
            {/* form row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 ml-4">
                    <label className="input-group">
                        <span>Brand Name</span>
                        <input type="text" name="name" placeholder="Brand name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="input-group">
                        <span>Brand Logo</span>
                        <input type="text" name="logo" placeholder="logo" className="input input-bordered" />
                    </label>
                </div>
            </div>
            {/* form row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/3 ml-4">
                    <label className="input-group">
                        <span>Banner 01</span>
                        <input type="text" name="banner1" placeholder="banner1" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/3 ml-4">
                    <label className="input-group">
                        <span>Banner 02</span>
                        <input type="text" name="banner2" placeholder="banner2" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/3 ml-4">
                    <label className="input-group">
                        <span>Banner 023</span>
                        <input type="text" name="banner3" placeholder="banner3" className="input input-bordered" />
                    </label>
                </div>
            </div>
            {/* form row Submit */}
            
            <div className="md:flex mb-8">
                <input type="submit" value="Add Brand" className="btn btn-block bg-theme-primary text-white hover:bg-white hover:text-theme-primary hover:border-theme-primary" />
            </div>
        </form>
    </div>
    );
};

export default AddBrand;