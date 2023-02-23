import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block"
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="283" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="427" rx="10" ry="10" width="90" height="27" />
    <rect x="125" y="417" rx="26" ry="26" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
