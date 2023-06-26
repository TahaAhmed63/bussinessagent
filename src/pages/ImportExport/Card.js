import React from "react";
const Card = (data) => {
    console.log(data)
  return (
    <div className="ImportCard d-flex justify-content-center align-items-center flex-column gap-2 p-4">
      <img src={data.data[0].image} alt="photoss" className="CardImg" />
      <p className="text-center text-muted mt-3">
       {data.description}
      </p>
      <p className="text-muted">{data.company}</p>
      <h5>{data.Name}</h5>
    </div>
  );
};

export default Card;
