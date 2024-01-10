import React from "react";
import ContentLoader from "react-content-loader";

const MenuLoader = ({ props }) => {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={44}
      viewBox="0 0 200 44"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="2" y="2" rx="0" ry="0" width="175" height="40" />
    </ContentLoader>
  );
};

export default MenuLoader;
