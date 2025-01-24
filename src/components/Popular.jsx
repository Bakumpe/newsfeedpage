import React from "react";

function PopularFeed({ article, content }) {
  return (
    <>
      <div className="popularFeed">
        <div className="articles">
          <h3>{article}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default PopularFeed;
