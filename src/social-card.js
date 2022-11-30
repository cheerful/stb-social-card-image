import React from "react";

export default ({
  children,
  title = "Missing Title",
  width = "1024px",
  height = "512px",
  author_avatar = "https://stackingthebricks.com/icon-256.png",
  author_name = "Alex Hillman"
}) => {
  const styles = {
    width: width,
    height: height,
  };
  return (
    <div id="social-card" className="social-card" style={styles}>
      <div class="header"></div>
      <img class="logo" alt="Stacking the Bricks" src="https://d33wubrfki0l68.cloudfront.net/cca6daea498584b465e8fc4d3ea004adf8676df1/31314/assets/stacking-the-bricks-logo.svg" width="200"/> 
      <h1>{title}</h1>
      <div class="author">
        <img src={author_avatar} alt={author_name} /> {author_name}
      </div>
      <div class="footer"></div>
    </div>
  );
};
