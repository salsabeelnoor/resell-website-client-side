import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ProductCard = ({ product, setBook, wishListBtn }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    image,
    email,
    productName,
    resellPrice,
    originalPrice,
    yearOfPurchase,
    time,
    date,
    name,
    detail,
    location,
  } = product;

  const { data: customers = [] } = useQuery({
    queryKey: ["email", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${email}`);
      const data = await res.json();
      return data;
    },
  });

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["email", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  const handleWishList = (id) => {
    if (user?.uid === null || users.customerState !== "buyer") {
      navigate("/login");
      toast.error("Please register as buyer to add wishlist");
    } else {
      const wishList = {
        buyerName: user?.displayName,
        buyerEmail: user?.email,
        productId: id,
        productName,
        bookerProductPrice: resellPrice,
        productImage: image,
        paymentStatus: false,
      };

      fetch("http://localhost:5000/wishlists", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(wishList),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("api hits", result);
          if (result.acknowledged) {
            toast.success("Added to wishlist");
          } else {
            toast.error(result.message);
          }
        });
    }
  };

  const handleBook = (product) => {
    if (user?.uid === null || users.customerState !== "buyer") {
      navigate("/login");
      toast.error("Please register as buyer to Book");
    } else {
      setBook(product);
    }
  };

  return (
    <div className="card  grid lg:grid-cols-card_layout grid-cols-mobile_layout bg-base-100 shadow-xl mb-7 lg:h-96 h-auto">
      <figure>
        <img className="" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 my-3">
          <h2 className="text-base text-gray-600 capitalize">
            <span className="text-gray-600 font-medium">Location:</span>{" "}
            {location}
          </h2>
          <h2 className="text-base text-gray-600 capitalize">
            <span className="text-gray-600 font-medium">Year of Purchase:</span>{" "}
            {yearOfPurchase}
          </h2>
          <div className="flex">
            <h2 className="text-base text-gray-600 capitalize">
              <span className="text-gray-600 font-medium">Posted By:</span>{" "}
              {name}
            </h2>
            {customers.verified && (
              <div className="tooltip" data-tip="varified seller">
                <svg
                  className="w-5 h-5 ml-1.5 text-green-500 flex-shrink-0 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <h2 className="text-base text-gray-600 capitalize">
            <span className="text-gray-600 font-medium">Original Price:</span>{" "}
            {originalPrice} BDT
          </h2>
          <h2 className="text-base text-gray-600 capitalize">
            <span className="text-gray-600 font-medium">Resell Price:</span>{" "}
            {resellPrice} BDT
          </h2>
          <h2 className="text-base text-gray-600 capitalize">
            <span className="text-gray-600 font-medium">posted on:</span> {date}{" "}
            {time}
          </h2>
        </div>
        <h2 className="text-base text-gray-600 capitalize mt-5 mr-10">
          <span className="text-gray-600 font-medium">Description:</span>
          {detail.length > 500 ? <>{detail.slice(0, 500) + ".."}</> : detail}
        </h2>
        <div className="card-actions lg:justify-end justify-center mt-3">
          {wishListBtn && (
            <label
              htmlFor="booking-modal"
              className="btn btn-secondary text-gray-800 bg-transparent hover:bg-secondary hover:text-white"
              onClick={() => handleWishList(_id)}
            >
              Add to WishList
            </label>
          )}
          <label
            htmlFor="booking-modal"
            className="btn btn-secondary text-white"
            onClick={() => handleBook(product)}
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
