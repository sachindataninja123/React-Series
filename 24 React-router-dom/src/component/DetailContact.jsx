import React from "react";
import { useParams } from "react-router-dom";

const DetailContact = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="page">
      <h1>Detail-Contact Page : {params.id}</h1>
    </div>
  );
};

export default DetailContact;
