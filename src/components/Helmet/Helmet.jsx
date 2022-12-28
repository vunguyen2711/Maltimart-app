import React from "react";

const Helmet = ({ title }) => {
  document.title = "Maltimart - " + title;
  return <></>;
};

export default Helmet;
