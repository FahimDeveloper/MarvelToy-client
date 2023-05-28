import { useEffect, useState } from 'react';

const AllToys = () => {
    const [allToysData, setAllToysData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const url = 'http://localhost:5000/allToys';
    const searchUrl = `http://localhost:5000/searchToys/${searchText}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(toys => setAllToysData(toys))
    }, [url]);
    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.search.value;
        setSearchText(searchText)
    }
    useEffect(() => {
        fetch(searchUrl)
            .then(res => res.json())
            .then(toys => setAllToysData(toys));
        if (searchText === "") {
            fetch(url)
                .then(res => res.json())
                .then(toys => setAllToysData(toys))
        }
    }, [searchUrl, searchText, url])
    return (
        <div className='container mx-auto py-16 space-y-5'>
            <div className="form-control">
                <form onSubmit={handleSearch} className='input-group justify-center w-full'>
                    <input type="text" name="search" placeholder="Search…" className="border-2 pl-3 w-1/3" />
                    <button type='submit' className="btn btn-square btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
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
                                            <button className='btn btn-secondary'>view details</button>
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

export default AllToys;