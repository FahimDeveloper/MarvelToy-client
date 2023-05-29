import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Auth/Auth';
import { FaPen, FaTrash, FaRegEye } from "react-icons/fa";
import UpdateToys from './UpdateToys';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [sellerToysData, setSellerToysData] = useState([]);
    const [toyId, setToyId] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [sortByPrice, setSortByPrice] = useState('')
    const myToysUrl = `http://localhost:5000/sellerToys/${user?.email}`;
    const highToLowUrl = `http://localhost:5000/sellerToys/highToLow/${user?.email}`;
    const lowToHigh = `http://localhost:5000/sellerToys/lowToHigh/${user?.email}`;
    const searchUrl = `http://localhost:5000/searchToys/${searchText}/${user?.email}`;
    useEffect(() => {
        fetch(myToysUrl)
            .then(res => res.json())
            .then(toys => setSellerToysData(toys))
    }, [myToysUrl]);
    const handleSortByPrice = (event) => {
        setSortByPrice(event.target.value)
    }
    useEffect(() => {
        if (sortByPrice === "highToLow") {
            fetch(highToLowUrl)
                .then(res => res.json())
                .then(sortData => setSellerToysData(sortData))
        } else if (sortByPrice === "lowToHigh") {
            fetch(lowToHigh)
                .then(res => res.json())
                .then(sortData => setSellerToysData(sortData))
        } else {
            fetch(myToysUrl)
                .then(res => res.json())
                .then(toys => setSellerToysData(toys))
        }
    }, [sortByPrice, highToLowUrl, lowToHigh, myToysUrl]);
    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.search.value;
        setSearchText(searchText)
    }
    useEffect(() => {
        if (searchText !== "") {
            fetch(searchUrl)
                .then(res => res.json())
                .then(toys => setSellerToysData(toys));
        }
        else {
            fetch(myToysUrl)
                .then(res => res.json())
                .then(toys => setSellerToysData(toys))
        }
    }, [searchUrl, searchText, myToysUrl]);
    const handleUpdateToy = (event) => {
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
        fetch(`http://localhost:5000/sellerToy/${toyId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                fetch(myToysUrl)
                    .then(res => res.json())
                    .then(toys => setSellerToysData(toys));
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Update Your Toy',
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
    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const filterData = sellerToysData.filter(toy => toy._id !== id);
                            setSellerToysData(filterData);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    }).catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Opps',
                            text: `${error.message} try after some time`
                        });
                    })
            }
        })
    }
    return (
        <div className='container mx-auto py-16 space-y-5'>
            <div className="form-control">
                <div className="form-control">
                    <form onSubmit={handleSearch} className='input-group justify-center w-full'>
                        <input type="text" name="search" placeholder="Search…" className="border-2 pl-3 w-1/3" />
                        <button type='submit' className="btn btn-square btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <select onChange={handleSortByPrice} className='border-2 px-5 py-2 rounded-lg'>
                    <option selected disabled>Filter by Price</option>
                    <option value="highToLow">High To Low</option>
                    <option value="lowToHigh">Low To High</option>
                    <option value="default">Default</option>
                </select>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>toy name</th>
                            <th>price</th>
                            <th>category</th>
                            <th>seller</th>
                            <th>quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerToysData.map((toy, index) => {
                                return (
                                    <tr key={toy._id}>
                                        <th>{index + 1}</th>
                                        <td><img src={toy.toyImg} alt="toy image" className='w-20 h-20 m object-contain' /></td>
                                        <td>{toy.toyname}</td>
                                        <td>${toy.price}</td>
                                        <td>{toy.category}</td>
                                        <td>{toy.seller.name}</td>
                                        <td>{toy.quantity}</td>
                                        <td>
                                            <div className='flex gap-4 text-xl items-center justify-start'>
                                                <label htmlFor="my-modal-5">
                                                    <FaPen onClick={() => setToyId(toy._id)} className='cursor-pointer' />
                                                </label>
                                                <FaTrash onClick={() => handleDelete(toy._id)} className='cursor-pointer text-error' />
                                                <Link to={`/toys/view/${toy._id}`}><FaRegEye className='cursor-pointer text-primary' /></Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                toyId ? <UpdateToys toyId={toyId} handleUpdateToy={handleUpdateToy} /> : ''
            }
        </div>
    );
};

export default MyToys;