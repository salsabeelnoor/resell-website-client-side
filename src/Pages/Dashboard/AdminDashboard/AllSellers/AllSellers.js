import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../../../Components/Loading/Loading";

const AllSellers = () => {
  const {
    data: customers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <Loading></Loading>;
  }

  const handleVarify = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Varified Successfully");
          refetch();
        }
      })
      .catch((error) => toast.error("Something went wrong!"));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
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
        Sellers
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Varify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(
              (customer, i) =>
                customer.customerState === "seller" && (
                  <tr key={customer._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-[72px] rounded-full">
                          <img src={customer.image} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="capitalize">{customer.name}</td>
                    <td>{customer.email}</td>
                    <td className="uppercase font-medium">
                      {customer.customerState}
                    </td>
                    <td>
                      {!customer.verified ? (
                        <>
                          <button
                            onClick={() => handleVarify(customer._id)}
                            className="btn btn-xs bg-blue-700 text-white "
                          >
                            Varify
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            disabled
                            className="btn btn-xs disabled:bg-green-700 disabled:text-white"
                          >
                            Varified
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(customer._id)}
                        className="btn btn-xs bg-red-700 text-white "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
