import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { orderPayment, setOrderPayment } = useState(true);

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyerEmail", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <Loading></Loading>;
  }

  //delete product
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product deleted successfully");
          refetch();
        }
      })
      .catch((error) => toast.error("Something went wrong!"));
  };

  return (
    <div className="container lg:mx-auto mx-2 py-10">
      <h2 className="lg:text-5xl text-blue-900 font-bold lg:text-start text-center text-4xl mb-5">
        My Orders
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
              <th>Transaction Id</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-[72px] rounded-full">
                      <img src={booking.bookedProductImage} alt="" />
                    </div>
                  </div>
                </td>
                <td>{booking.bookedProductName}</td>
                <td>{booking.bookerProductPrice}</td>
                <td>
                  {!booking.paymentStatus ? (
                    <>
                      <Link
                        to={`/dashboard/payment/${booking._id}`}
                        className="btn btn-xs bg-blue-700 text-white "
                      >
                        Pay
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        disabled
                        className="btn btn-xs disabled:bg-green-700 disabled:text-white"
                      >
                        Paid
                      </button>
                    </>
                  )}
                </td>
                <td>{booking.transactionId}</td>
                <td>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-xs bg-red-700 text-white "
                  >
                    Delete
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

export default MyOrders;
