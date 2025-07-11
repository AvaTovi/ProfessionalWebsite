import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Ava Tovi - Software Development</title>
    </Helmet>
  );
};

export default PageTitle;
