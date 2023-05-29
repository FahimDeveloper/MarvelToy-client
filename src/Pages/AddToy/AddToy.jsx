import { useContext } from 'react';
import { AuthContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const handlePostProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyname = form.toyname.value;
        const toyImg = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const seller = {
            name: form.name.value,
            email: form.email.value
        };
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const toyData = { toyname, toyImg, category, price, seller, quantity, rating, description };
        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Add Your Toy',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Opps',
                text: `${error.message} try after some time`
            });
        })
    }
    return (
        <div className='container mx-auto flex justify-center items-center min-h-screen space-y-10 py-16'>
            <form onSubmit={handlePostProduct} className='w-4/5 mx-auto card shadow-xl space-y-5 pb-5 pt-10 border px-10'>
                <h2 className='text-center text-4xl font-medium'>Add Your Toy with all information</h2>
                <div className='card-body space-y-2'>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="toyName" className='pl-2 text-sm font-medium'>Toy Name</label>
                            <input type="text" name='toyname' id="toyName" className='input input-bordered rounded-full' placeholder='Type name here' />
                        </div>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="toyImg" className='pl-2 text-sm font-medium'>Image URL</label>
                            <input type="url" name='photo' id="toyImg" className='input input-bordered rounded-full' placeholder='Type url here' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="category" className='pl-2 text-sm font-medium'>Sub Category</label>
                            <select name="category" className='input input-bordered rounded-full'>
                                <option value="" disabled>Select an option</option>
                                <option value="ironMan">Iron Man</option>
                                <option value="captainAmerica">Captain America</option>
                                <option value="blackPanther">Black Panther</option>
                                <option value="spiderMan">Spider Man</option>
                                <option value="thor">Thor</option>
                                <option value="hulk">Hulk</option>
                            </select>
                        </div>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="price" className='pl-2 text-sm font-medium'>Price</label>
                            <input type="number" name='price' id="price" className='input input-bordered rounded-full' placeholder='Type price here' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="sellerName" className='pl-2 text-sm font-medium'>Seller Name</label>
                            <input type="text" name='name' id="sellerName" className='input input-bordered rounded-full' value={user?.displayName} />
                        </div>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="sellerEmail" className='pl-2 text-sm font-medium'>Seller Email</label>
                            <input type="email" name='email' id="sellerEmail" className='input input-bordered rounded-full' value={user?.email} />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="quantity" className='pl-2 text-sm font-medium'>Available Quantity</label>
                            <input type="number" name='quantity' id="quantity" className='input input-bordered rounded-full' placeholder='Type quantity here' />
                        </div>
                        <div className='flex w-full flex-col gap-1'>
                            <label htmlFor="rating" className='pl-2 text-sm font-medium'>Avaiblable Rating</label>
                            <input type="number" name='rating' id="rating" className='input input-bordered rounded-full' placeholder='Type price here' />
                        </div>
                    </div>
                    <div className='flex w-full flex-col gap-1'>
                        <label htmlFor="Description" className='pl-2 text-sm font-medium'>Description</label>
                        <textarea name="description" className='border rounded-lg p-4' id="Description" rows="3" placeholder='Description'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary rounded-full'>Add Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;