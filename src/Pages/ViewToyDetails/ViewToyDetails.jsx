import { useLoaderData } from "react-router-dom"

const ViewToyDetails = () => {
    const viewToysData = useLoaderData();
    return (
        <div className="container mx-auto h-screen flex justify-center items-center">
            <div className="grid grid-cols-3 items-center border border-secondary p-10 bg-base-100 shadow-xl rounded-3xl">
                <img src={viewToysData.toyImg} alt="toy img" className="w-[500px] h-[500px] object-contain mx-auto col-span-1" />
                <div className="card-body space-y-3 col-span-2">
                    <h3 className="text-3xl font-medium">{viewToysData.toyname}</h3>
                    <p className="font-medium text-xl">Price : ${viewToysData.price}</p>
                    <p> <span className="font-medium">Available Quantity :</span> {viewToysData.quantity}</p>
                    <p> <span className="font-medium">Rating :</span> {viewToysData.rating}</p>
                    <p> <span className="font-medium">Seller name :</span> {viewToysData.seller.name}</p>
                    <p> <span className="font-medium">Seller email :</span> {viewToysData.seller.email}</p>
                    <p><span className="font-medium">Description :</span> {viewToysData.description}</p>
                    <div className="space-x-4">
                        <button className="btn btn-primary rounded-full capitalize px-10">add to card</button>
                        <button className="btn btn-error rounded-full capitalize px-10">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewToyDetails;