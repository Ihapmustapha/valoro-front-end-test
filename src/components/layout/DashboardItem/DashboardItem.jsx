import React from "react";

const DashboardItem = ({ name, pantoneValue, year }) => {
  return (
    <>
      <p>{name}</p>
      <p>{pantoneValue}</p>
      <p>{year}</p>
    </>
  );
};

export default DashboardItem;
