import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categoryList.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Job Category List</h1>
      <p className="mt-5 text-gray-400 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex w-full justify-between my-20">
        {category.map((list) => (
          <div key={list.title}>
            <img
              className="bg-purple-500 p-4 rounded-lg bg-opacity-10"
              src={list.image}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-600 mt-7">
              {list.title}
            </h1>
            <h1 className="text-gray-400 my-2">{list.subtitle}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
