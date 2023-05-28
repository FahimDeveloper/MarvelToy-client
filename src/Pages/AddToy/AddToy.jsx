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
        const toyData = { toyname, toyImg, category, price, seller, quantity, rating };
        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'successfully add your toy'
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
        <div className='container mx-auto flex justify-center items-center h-screen space-y-10'>
            <form onSubmit={handlePostProduct} className='w-4/5 mx-auto card shadow-xl space-y-10 border p-10'>
                <h2 className='text-center text-4xl font-medium'>Add Your Toy with all information</h2>
                <div className='card-body space-y-5'>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="toyName">Toy Name</label>
                            <input type="text" name='toyname' id="toyName" className='input input-bordered' placeholder='type name here' />
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="toyImg">Image URL</label>
                            <input type="url" name='photo' id="toyImg" className='input input-bordered' placeholder='type url here' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="category">Sub Category</label>
                            <select name="category" className='input input-bordered'>
                                <option value="" disabled>Select an option</option>
                                <option value="Iron Man">Iron Man</option>
                                <option value="Captain America">Captain America</option>
                                <option value="Black Panther">Black Panther</option>
                                <option value="Spider Man">Spider Man</option>
                                <option value="Thor">Thor</option>
                                <option value="Hulk">Hulk</option>
                            </select>
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="price">Price</label>
                            <input type="number" name='price' id="price" className='input input-bordered' placeholder='type price here' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="sellerName">Seller Name</label>
                            <input type="text" name='name' id="sellerName" className='input input-bordered' value={user?.displayName} />
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="sellerEmail">Seller Email</label>
                            <input type="email" name='email' id="sellerEmail" className='input input-bordered' value={user?.email} />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="quantity">Available Quantity</label>
                            <input type="number" name='quantity' id="quantity" className='input input-bordered' placeholder='type quantity here' />
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="rating">Avaiblable Rating</label>
                            <input type="number" name='rating' id="rating" className='input input-bordered' placeholder='type price here' />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary rounded-full'>Add Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;