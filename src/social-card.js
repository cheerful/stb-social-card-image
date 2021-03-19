import React from "react";

export default ({
    children,
    title = "Missing Title",
    width = "1024px",
    height = "512px",
    author_avatar = "https://nyte-collection.netlify.app/assets/nyte-logo.png",
}) => {
    const styles = {
        width: width,
        height: height,
    };
    return (
        <div id="social-card" className="social-card" style={styles}>
      <div class="header"></div>
      <div class="title"><h1>{title}</h1></div>
      <div class="author">
        <img src={author_avatar} />
      </div>
      <div class="footer"></div>
    </div>
    );
};