import React from "react";

function Header() {
  return (
    <>
      <nav className="nav">
        <div className="top">
          <h1>News Feed</h1>
          <div className="search">
            <label htmlFor="searchArticle">Search For Articles</label>
            <input type="text" name="searchArticle" placeholder="Search" />
          </div>
        </div>
        <div className="subtitles">
          <p>Live TV</p>
          <p>Markets</p>
          <p>Economics</p>
          <p>Industries</p>
          <p>Tech</p>
          <p>Politics</p>
          <p>African Edition</p>
          <p>More</p>
        </div>
      </nav>
    </>
  );
}

export default Header;
