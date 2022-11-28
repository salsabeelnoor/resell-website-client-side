import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-center text-4xl font-medium mb-16 text-primary">
        Search By Category
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center justify-items-center mx-3 lg:mx-auto cursor-pointer">
        {categories.map((category) => (
          <button>
            <Link to={`/categories/${category._id}`}>
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
