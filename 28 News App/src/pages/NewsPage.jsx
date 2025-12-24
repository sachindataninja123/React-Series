import React, { useEffect } from "react";
import Wrapper from "../Components/Wrapper";
import { useNewsContext } from "../Context/NewsContext";
import NewsCard from "../Components/NewsCard";
import Loader from "../Components/Loader";

const NewsPage = ({ className }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  // load data on initial render
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      // console.log(data);
      setNews(data.articles);
    })();
  }, []);

  if (loading) return <Loader className={"m-auto h-[50vh]"} />;

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-5 ${className}`}>
        {news.map((newDetails, idx) => {
          if (!newDetails.urlToImage) return null;
          return <NewsCard key={idx} details={newDetails} />;
        })}
      </div>
    </Wrapper>
  );
};

export default NewsPage;
