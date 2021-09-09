import React from "react";

function FormData({ data, showData }) {
  const {
    firstName,
    secondName,
    age,
    email,
    gender,
    maritalStatus,
    qualification,
  } = data;
  return (
    <div>
      {showData && (
        <div class="card w-50">
          <div class="card-body">
            <h4 class="card-title" style={{ textAlign: "center" }}>
              Form Data
            </h4>
            <p class="card-text">FirstName: {firstName ? firstName : " --"}</p>
            <p class="card-text">
              LastName: {secondName ? secondName : " ---"}
            </p>{" "}
            <p class="card-text">Email: {email ? email : " ---"}</p>{" "}
            <p class="card-text">Age: {age ? age : " ---"}</p>{" "}
            <p class="card-text">Gender: {gender ? gender : " ---"}</p>{" "}
            <p class="card-text">
              Marital Status: {maritalStatus ? maritalStatus : " ---"}
            </p>
            <p class="card-text">
              qualification: {qualification ? qualification : " ---"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormData;
