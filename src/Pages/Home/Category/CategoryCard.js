import React from "react";

const CategoryCard = ({ category }) => {
  const { category_name, image } = category;
  return (
    <div className="flex">
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 card w-96 bg-base-100 shadow-xl image-full h-60">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body justify-center items-center">
          <h2 className=" card-title uppercase text-center text-5xl font-poppins">
            {category_name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
