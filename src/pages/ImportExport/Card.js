import React from "react";
const Card = (datal) => {
    console.log(datal)
  return (
    <div className="ImportCard d-flex justify-content-center align-items-center flex-column gap-2 p-3">
      <img src={datal.data.image} alt="photoss" className="CardImg" />
      <p className="text-center text-muted mt-3">
       {datal.data.description}
      </p>
      <p className="text-muted">{datal.data.company}</p>
      <h5 className="text-dark">{datal.data.Name}</h5>
    </div>
  );
};

export default Card;
