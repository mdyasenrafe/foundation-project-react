import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Men = (props) => {
  const checkIcon = <FontAwesomeIcon icon={faCheck} />;

  const { name, sallary, photo, age, nationality, profession, phone, email } =
    props.data;
  return (
    <div className="col">
      <div className="card h-100 border-0   p-3 shadow-lg">
        <img height="250" className="rounded w-100" src={photo} alt="" />
        <div className="card-body px-0">
          <h5 className="card-title">Name : {name}</h5>
          <span className="card-text d-block pt-1">Age :{age} </span>
          <span className="card-text d-block pt-1">
            Nationality : {nationality}
          </span>
          <span className="card-text d-block pt-1">
            Profession : {profession}
          </span>
          <span className="card-text d-block pt-1">Sallary : ${sallary}</span>
          <span className="card-text d-block pt-1">Phone : +{phone}</span>
          <span className="card-text d-block pt-1">Email : {email}</span>
        </div>
        <div className="card-footer text-center bg-light border-0">
          <button
            onClick={() => props.handleSelect(props.data)}
            className="btn btn-danger "
          >
            <span>{checkIcon} Select</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Men;
