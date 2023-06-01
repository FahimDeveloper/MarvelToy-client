import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/Auth';

const UpdateToys = ({ toyId, handleUpdateToy }) => {
    const { user } = useContext(AuthContext);
    const [toyData, setToyData] = useState({})
    useEffect(() => {
        setToyData({})
        fetch(`http://localhost:5000/toys/${toyId}/${user?.email}`)
            .then(res => res.json())
            .then(data => setToyData(data));
    }, [toyId, user]);
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleUpdateToy} className='modal-box relative w-11/12 max-w-5xl space-y-3'>
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-secondary btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-center text-3xl py-5 mb-5'>Update Your Toy information</h3>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="toyName" className='pl-2 text-sm font-medium'>Toy Name</label>
                            <input type="text" name='toyname' id="toyName" className='input input-bordered rounded-full' defaultValue={toyData.toyname} placeholder='Type name here' />
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="toyImg" className='pl-2 text-sm font-medium'>Image URL</label>
                            <input type="url" name='photo' id="toyImg" className='input input-bordered rounded-full' defaultValue={toyData.toyImg} placeholder='Type url here' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="category" className='pl-2 text-sm font-medium'>Sub Category</label>
                            <select name="category" value={toyData.category} className='input input-bordered rounded-full'>
                                <option value="iron man">Iron Man</option>
                                <option value="captain america">Captain America</option>
                                <option value="black panther">Black Panther</option>
                                <option value="spider man">Spider Man</option>
                                <option value="thor">Thor</option>
                                <option value="hulk">Hulk</option>
                            </select>
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="price" className='pl-2 text-sm font-medium'>Price</label>
                            <input type="number" name='price' id="price" className='input input-bordered rounded-full' defaultValue={toyData.price} placeholder='Type price here' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="sellerName" className='pl-2 text-sm font-medium'>Seller Name</label>
                            <input type="text" name='name' id="sellerName" className='input input-bordered rounded-full' defaultValue={user?.displayName} readOnly />
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="sellerEmail" className='pl-2 text-sm font-medium'>Seller Email</label>
                            <input type="email" name='email' id="sellerEmail" className='input input-bordered rounded-full' defaultValue={user?.email} readOnly />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="quantity" className='pl-2 text-sm font-medium'>Available Quantity</label>
                            <input type="number" name='quantity' id="quantity" className='input input-bordered rounded-full' defaultValue={toyData.quantity} placeholder='Type quantity here' />
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="rating" className='pl-2 text-sm font-medium'>Avaiblable Rating</label>
                            <input type="number" name='rating' id="rating" className='input input-bordered rounded-full' defaultValue={toyData.rating} placeholder='Type price here' />
                        </div>
                    </div>
                    <div className='flex w-full flex-col gap-2'>
                        <label htmlFor="Description" className='pl-2 text-sm font-medium'>Description</label>
                        <textarea name="description" className='border rounded-lg p-4' id="Description" rows="3" defaultValue={toyData.description} placeholder='Description'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary w-full rounded-full'>Update Toy</button>
                </form>
            </div>
        </>
    );
};

export default UpdateToys;