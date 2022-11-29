import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../../../../Components/Loading/Loading";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const WishList = () => {
  const { user } = useContext(AuthContext);

  const { data: wishLists = [], isLoading } = useQuery({
    queryKey: ["buyerEmail", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/wishlists/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div className="container lg:mx-auto mx-2 py-10">
      <h2 className="lg:text-5xl text-blue-900 font-bold lg:text-start text-center text-4xl mb-5">
        My Wishlist
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {wishLists.map((wishlist, i) => (
              <tr key={wishlist._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-[72px] rounded-full">
                      <img src={wishlist.productImage} alt="" />
                    </div>
                  </div>
                </td>
                <td>{wishlist.productName}</td>
                <td>{wishlist.productPrice}</td>
                <td>
                  <button className="btn btn-sm bg-blue-800 text-white ">
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
