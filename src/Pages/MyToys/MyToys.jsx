import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Auth/Auth';
import { FaPen, FaTrash, FaRegEye } from "react-icons/fa";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [sellerToysData, setSellerToysData] = useState([]);
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
        fetch(searchUrl)
            .then(res => res.json())
            .then(toys => setSellerToysData(toys));
        if (searchText === "") {
            fetch(myToysUrl)
                .then(res => res.json())
                .then(toys => setSellerToysData(toys))
        }
    }, [searchUrl, searchText, myToysUrl])
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
                    <option value="" selected disabled>Filter by Price</option>
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
                                                <FaPen className='cursor-pointer' />
                                                <FaTrash className='cursor-pointer text-error' />
                                                <FaRegEye className='cursor-pointer text-primary' />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;