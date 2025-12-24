import React from "react";
import { useNewsContext } from "../Context/NewsContext";

const Sidebar = () => {
  const { news, setNews, fetchNews } = useNewsContext();

  const handleClick = async () => {
    const data = await fetchNews(`/top-headlines?country=us`);
    setNews(data.articles);
  };

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-5"
            className="drawer-button btn btn-primary"
            onClick={handleClick}
          >
            Top Headlines
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <h1 className="text-2xl m-3 font-semibold">Top Headlines</h1>
            {news.map((item , idx) => {
              return (
                <li key={idx}>
                  <a>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
