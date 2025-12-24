import React, { useContext, useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../Context/NewsContext";

const Category = ({ className }) => {
  const {setNews , fetchNews} = useNewsContext();

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleClick = async (item) => {
    const data = await fetchNews(`/everything?q=${item}`)
    setNews(data.articles)
  };

  return (
    <div className={`${className} bg-base-200`}>
      <Wrapper>
        <div
          className={`flex gap-5 items-center justify-center flex-wrap ${className}`}
        >
          {categories.map((item, idx) => {
            return (
              <div key={idx}>
                <button onClick={() =>handleClick(item)} className="btn btn-primary">
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
