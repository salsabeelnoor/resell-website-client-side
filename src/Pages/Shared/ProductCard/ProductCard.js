import React from "react";

const ProductCard = ({ product, setBook, wishListBtn, setWishListBtn }) => {
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
          <h2 className="text-base text-gray-600 capitalize">
            <span className="text-gray-600 font-medium">Posted By:</span> {name}
          </h2>
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
              onClick={() => setBook(product)}
            >
              Add to WishList
            </label>
          )}
          <label
            htmlFor="booking-modal"
            className="btn btn-secondary text-white"
            onClick={() => setBook(product)}
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
