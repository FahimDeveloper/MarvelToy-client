import { useContext, useEffect, useState } from 'react';
import Loader from '../SharedComponents/Loader/Loader';
import { AuthContext } from '../../Auth/Auth';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

const AllToys = () => {
    const { user } = useContext(AuthContext)
    const [allToysData, setAllToysData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [totalToy, setTotalToy] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const toyPerPage = 20;
    const navigate = useNavigate();
    const url = 'http://assignment-11-server-psi-ten.vercel.app/allToys';
    const searchUrl = `http://assignment-11-server-psi-ten.vercel.app/searchToys/${searchText}`;
    useEffect(() => {
        fetch(`http://assignment-11-server-psi-ten.vercel.app/totalToy`)
            .then(res => res.json())
            .then(data => setTotalToy(data.total))
    }, []);
    const totalPage = Math.ceil(totalToy / toyPerPage);
    const pageNumbers = [...Array(totalPage).keys()];
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(toys => {
                setAllToysData(toys);
                setLoading(false);
            });
    }, [url]);
    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.search.value;
        setSearchText(searchText)
    }
    const handleSearchByChangeText = (event) => {
        setSearchText(event.target.value)
    }
    useEffect(() => {
        if (searchText !== "") {
            fetch(searchUrl)
                .then(res => res.json())
                .then(toys => setAllToysData(toys));
        }
        else {
            fetch(url)
                .then(res => res.json())
                .then(toys => setAllToysData(toys))
        }
    }, [searchUrl, searchText, url]);
    const handleViewDetails = (id) => {
        if (user) {
            navigate(`/toys/view/${id}`)
        } else {
            Swal.fire({
                title: 'Have To Login',
                text: "Have to login for see toy details",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3ABFF8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go for login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/toys/view/${id}`)
                }
            })
        }
    }
    if (loading === true) {
        return <Loader />
    }
    return (
        <div className='container mx-auto py-16 space-y-5 min-h-screen'>
            <div className="form-control">
                <form onSubmit={handleSearch} className='input-group justify-center w-full'>
                    <input onChange={handleSearchByChangeText} type="text" name="search" placeholder="Search…" className="border-2 pl-3 w-1/3" />
                    <button type='submit' className="btn btn-square btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
            </div>
            {
                allToysData.length > 0 ?
                    <>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>image</th>
                                        <th>toy name</th>
                                        <th>price</th>
                                        <th>category</th>
                                        <th>seller</th>
                                        <th>quantity</th>
                                        <th>details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allToysData.map((toy, index) => {
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
                                                        <button onClick={() => handleViewDetails(toy._id)} className='btn btn-secondary rounded-full capitalize'>view details</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='text-center space-x-3'>
                            {
                                totalToy.length > 20 ? pageNumbers.map(number => <button
                                    onClick={() => setCurrentPage(number)}
                                    className={`${(currentPage === number) ? "border-2 text-xl rounded-lg bg-primary" : ''} py-1 px-3 rounded text-lg border-2 border-primary`}
                                    key={number}>
                                    {number + 1}
                                </button>) : ''
                            }
                        </div>
                    </>
                    : <p className='flex justify-center items-center tableMiddle text-5xl'>No Toys Found</p>
            }
        </div>
    );
};

export default AllToys;