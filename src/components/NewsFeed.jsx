import React from "react";

function NewsFeed({
  article,
  date,
  author,
  content,
  content2,
  image,
  handleReadMore,
  isExpanded,
}) {
  return (
    <div className="feed">
      <div className="feedBox">
        <h2>{article}</h2>
        <h4>
          By: {author}
          <button onClick={handleReadMore} className="readmorebtn">
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </h4>
        <div className="feedSpace">
          <div className="image">
            <img src={image} alt={article} />
          </div>
          <div className="content">
            {date}
            <div className="content1">
              {content}

              {isExpanded && <p className="content2">{content2}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
