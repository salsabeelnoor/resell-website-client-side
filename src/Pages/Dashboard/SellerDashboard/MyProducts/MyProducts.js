import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loading from "../../../../Components/Loading/Loading";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://resell-website-assignment-server-side.vercel.app/products/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  //delete product
  const handleDelete = (id) => {
    fetch(
      `https://resell-website-assignment-server-side.vercel.app/products/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product deleted successfully");
          refetch();
        }
      })
      .catch((error) => toast.error("Something went wrong!"));
  };

  //advertise product
  const handleAdvertise = (id) => {
    fetch(
      `https://resell-website-assignment-server-side.vercel.app/products/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Advertised Successfully");
          refetch();
        }
      })
      .catch((error) => toast.error("Something went wrong!"));
  };

  return (
    <div className="container lg:mx-auto mx-2 py-10">
      <h2 className="lg:text-5xl text-blue-900 font-bold lg:text-start text-center text-4xl mb-5">
        My Products
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.productName}</td>
                <td className="capitalize">{product.category}</td>
                <td>{product.productStatus}</td>
                <td>
                  {!product.advertise ? (
                    <>
                      <button
                        onClick={() => handleAdvertise(product._id)}
                        className="btn btn-xs bg-blue-700 text-white "
                      >
                        Advertise
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        disabled
                        className="btn btn-xs disabled:bg-green-700 disabled:text-white"
                      >
                        Advertised
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
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

export default MyProducts;
