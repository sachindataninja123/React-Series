import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../Context/NewsContext";
import Sidebar from "./Sidebar";

const Navbar = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();

  let timer;
  const searchNews = (e) => {
    const searchVal = e.target.value;
    if (!searchVal) return;
    clearTimeout(timer)

    timer = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${searchVal}`);
      setNews(data.articles);
    }, 2000);
  };

  return (
    <div className={`bg-base-300 ${className}`}>
      <Wrapper>
        <div>
          <div className="navbar shadow-sm">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">News App</a>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                onChange={searchNews}
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
              <div className="dropdown dropdown-end">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
