import React from "react";

export default ({
    children,
    title = "Missing Title",
    width = "1024px",
    height = "512px",
    author_avatar = "https://new.indyhall.org/assets/images/indy-hall.png",
    author_name = "Indy Hall"
}) => {
    const styles = {
        width: width,
        height: height,
    };
    return (
        <div id="social-card" className="social-card" style={styles}>
      <div class="header"></div>
      <h1>{title}</h1>
      <div class="author">
        <img src={author_avatar} alt={author_name} /> {author_name}
      </div>
      <div class="footer"></div>
    </div>
    );
};