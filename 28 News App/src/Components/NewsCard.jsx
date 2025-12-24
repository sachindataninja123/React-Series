import React from "react";

const NewsCard = ({ details }) => {
  
  return (
    <div>
      <div className="card bg-base-200  shadow-sm">
        <figure>
          <img className="w-full aspect-video object-cover" src={details.urlToImage} alt="details-image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2">{details.title}</h2>
          <p className="line-clamp-3">{details.description}</p>

          <div className="card-actions justify-end">
            <button
              onClick={() => {
                return window.open(details.url, "_blank");
              }}
              className="badge-outline btn"
            >
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
